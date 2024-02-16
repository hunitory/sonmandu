import tensorflow as tf

gpus = tf.config.experimental.list_physical_devices('GPU')

if not gpus:
    print("No GPU devices available.")

else:
    print("<<< GPU List >>>")
    for device in gpus:
        print(device)
    