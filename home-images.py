from asyncio.windows_events import NULL
import glob
from bs4 import BeautifulSoup as bs
import re

data = glob.glob('./data//*.html')
image_extensions = ['.jpg', '.jpeg', 'png']

def readFiles():
    html_content = []
    for path in data:
        with open(path, encoding='utf-8') as file:
            content = bs(file, 'html.parser')
            html_content.append(content)
    return html_content

def getAllImagesFromHTML(html_content):
    image_content = []
    for content in html_content:
        image = []
        for img in content.findAll('img'):
            image.append(img.get('src'))
        for img in content.findAll('div'):
            image.append(img.get('background-image'))
        image_content.append(set(image))
    return image_content

def processImageContent(image_content):
    content = []
    for images in image_content:
        temp = []
        for img in images:
           if img is not None:
               for ext in image_extensions:
                   if ext in img:
                    temp.append(img)
        content.append(temp)
    return content
 
html_content = readFiles()

image_content = getAllImagesFromHTML(html_content)

image_content = processImageContent(image_content)



file = open('./urls.txt', 'w')
for content in image_content:
    for img in content:
        file.write(img + '\n')
    file.write('\n************************************************************************************************\n')




