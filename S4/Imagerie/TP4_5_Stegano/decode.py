from stegano import *
from PIL import Image
import numpy
import stegano


if __name__ == "__main__":

    path = './exercices/'
    filename = 'message_x.png'
    newFilename = 'message_x_decode.png'

    # Read image
    image = Image.open(path + filename)

    # Read pixels
    pixels = image.load()

    for x in range(size[0]):
        for y in range(size[1]):
            R = pixels[x, y][0]  # Couleur Rouge
            V = pixels[x, y][1]  # Couleur Verte
            B = pixels[x, y][2]  # Couleur Bleu
            pixels[x, y] = (R, V, B)

    for x in range(size[0]):
        for y in range(size[1]):
            R = pixels[x, y][0]
            V = pixels[x, y][1]
            B = pixels[x, y][2]
            G = int(0.299 * R + 0.587 * V + 0.114 * B)# coding: utf8

            pixels[x, y] = (G, G, G)

    # Enregistre l'image
    image.save(path + newFilename, "PNG")
