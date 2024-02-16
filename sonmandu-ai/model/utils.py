# -*- coding: utf-8 -*-
from __future__ import print_function
from __future__ import absolute_import

import os
import glob

import imageio
from imageio import imsave

from cv2 import imwrite
import numpy as np
import io
from skimage.transform import resize
from skimage import transform

def pad_seq(seq, batch_size):
    # pad the sequence to be the multiples of batch_size
    seq_len = len(seq)
    if seq_len % batch_size == 0:
        return seq
    padded = batch_size - (seq_len % batch_size)
    seq.extend(seq[:padded])
    return seq


def bytes_to_file(bytes_img):
    return io.BytesIO(bytes_img)


def normalize_image(img):
    """
    Make image zero centered and in between (-1, 1)
    """
    normalized = (img / 127.5) - 1.
    return normalized

def read_split_image(img):
    mat = imageio.imread(img).astype(float)
    side = int(mat.shape[1] / 2)
    assert side * 2 == mat.shape[1]
    img_A = mat[:, :side]  # target
    img_B = mat[:, side:]  # source

    return img_A, img_B


def shift_and_resize_image(img, shift_x, shift_y, nw, nh):
    w, h, _ = img.shape
    enlarged = resize(img, (nw, nh), mode='reflect', anti_aliasing=True)
    return enlarged[shift_x:shift_x + w, shift_y:shift_y + h]


def scale_back(images):
    return (images + 1.) / 2.


def merge(images, size):
    h, w = images.shape[1], images.shape[2]
    img = np.zeros((h * size[0], w * size[1], 3))
    for idx, image in enumerate(images):
        i = idx % size[1]
        j = idx // size[1]
        img[j * h:j * h + h, i * w:i * w + w, :] = image
    return img


def save_concat_images(imgs, img_path):
    concated = np.concatenate(imgs, axis=1)
    concated = ((concated + 1) / 2 * 255).astype(np.uint8)
    imwrite(img_path, concated) 
    

def compile_frames_to_gif(frame_dir, gif_file):
    frames = sorted(glob.glob(os.path.join(frame_dir, "*.png")))
    print(frames)

    if not frames:
        print("No PNG files found in the specified directory.")
    
    images = []
    for i, f in enumerate(frames):
        print(f"== {i}번째 프레임 리사이즈 시작!")
        #resize_img = transform.resize(imageio.imread(f), output_shape=(1/3, 1/3, 1), mode='constant')
        #images.append(resize_img)
        images.append(imageio.imread(f))
#         imwrite(f'{frame_dir}/frame{i}.png', imageio.imread(f))
#     images = [transform.resize(imageio.imread(f), output_shape=(1/3, 1/3, 1), mode='constant') for f in frames]

    print("이미지 리사이즈 처리!")
    print(images)
    imsave(gif_file, images, duration=0.1, format='gif')
    
    print("gif 생성!")
    return gif_file
