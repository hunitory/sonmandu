import tensorflow as tf

def batch_norm(x, is_training, epsilon=1e-5, decay=0.9, scope="batch_norm"):
    return tf.keras.layers.BatchNormalization(epsilon=epsilon, momentum=decay, scale=True)(x, training=is_training)


def conv2d(x, output_filters, kh=5, kw=5, sh=2, sw=2, stddev=0.02, scope="conv2d"):
    with tf.name_scope(scope):
        shape = x.shape.as_list()
        W = tf.Variable(tf.random.truncated_normal([kh, kw, shape[-1], output_filters], stddev=stddev), name='W')
        Wconv = tf.nn.conv2d(x, W, strides=[1, sh, sw, 1], padding='SAME')

        biases = tf.Variable(tf.constant(0.0, shape=[output_filters]), name='b')
        Wconv_plus_b = tf.reshape(tf.nn.bias_add(Wconv, biases), Wconv.shape)

        return Wconv_plus_b


def deconv2d(x, output_shape, kh=5, kw=5, sh=2, sw=2, stddev=0.02, scope="deconv2d"):
    with  tf.name_scope(scope):
        # filter: [height, width, output_channels, in_channels]
        input_shape = x.shape.as_list()
        W = tf.Variable(tf.random.normal([kh, kw, output_shape[-1], input_shape[-1]], stddev=stddev), name='W')

        deconv = tf.nn.conv2d_transpose(x, W, output_shape=output_shape, strides=[1, sh, sw, 1], padding='SAME')

        biases = tf.Variable(tf.constant(0.0, shape=[output_shape[-1]]), name='b')
        deconv_plus_b = tf.reshape(tf.nn.bias_add(deconv, biases), deconv.shape)

        return deconv_plus_b


def lrelu(x, leak=0.2):
    return tf.maximum(x, leak * x)


def fc(x, output_size, stddev=0.02, scope="fc"):
    with tf.name_scope(scope):
        shape = x.shape.as_list()
        W = tf.Variable(tf.random.normal([shape[1], output_size], stddev=stddev), name='W')
        b = tf.Variable(tf.constant(0.0, shape=[output_size]), name='b')
        return tf.matmul(x, W) + b


def init_embedding(size, dimension, stddev=0.01, scope="embedding"):
    with tf.name_scope(scope):
        return tf.Variable(tf.random.normal([size, 1, 1, dimension], stddev=stddev), name='E')


def conditional_instance_norm(x, ids, labels_num, mixed=False, scope="conditional_instance_norm"):
    with tf.name_scope(scope):
        shape = x.shape.as_list()
        batch_size, output_filters = shape[0], shape[-1]
        scale = tf.Variable(tf.constant(1.0, shape=[labels_num, output_filters]), name='scale')
        shift = tf.Variable(tf.constant(0.0, shape=[labels_num, output_filters]), name='shift')

        mu, sigma = tf.nn.moments(x, [1, 2], keepdims=True)
        norm = (x - mu) / tf.sqrt(sigma + 1e-5)

        batch_scale = tf.reshape(tf.nn.embedding_lookup(scale, ids=ids), [batch_size, 1, 1, output_filters])
        batch_shift = tf.reshape(tf.nn.embedding_lookup(shift, ids=ids), [batch_size, 1, 1, output_filters])

        z = norm * batch_scale + batch_shift
        return z
