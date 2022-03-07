
from fileinput import filename
import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import re

# Fetch the html file
filename = 'html-files//7138 Cassidy Court #Lot 219, Victor, NY 14564 (MLS # R1389188) _ Morrell Builders.html'
with open(filename,encoding='utf-8') as file:
        soup = BeautifulSoup(file,'html.parser')


# Parse the html fil
#soup = BeautifulSoup(html_doc, 'html.parser')

# Format the parsed html file
#tags = soup('div')
imagesJpg = soup.find_all('img', {'src' : re.compile('.jpg')})
imagesJpeg = soup.find_all('img', {'src' : re.compile('.jpeg')})
imagesPng = soup.find_all('img', {'src' : re.compile('.png')})

#imagesIna = soup.find_all('a', {'href': re.compile('.jpg')})

useful = []

if  not imagesJpg :
    print("Not Present\n\n")
    
else:
    print("IMAGES - JPG")
    for image in imagesJpg: 
    #if(!image.re.compile('[.Icons.]') && !image.re.compile('[.icons.]'))
        print(image['src']+'\n')
    #++count
#print(count)

if  not imagesJpeg :  
    print("Not Present\n\n")
else:    
    print("IMAGES - JPEG")
    for image in imagesJpeg: 
        #if(!image.re.compile('[.Icons.]') && !image.re.compile('[.icons.]'))
        print(image['src']+'\n')

if not imagesPng:
    print("Not Present\n\n")
else:
    print("IMAGES - PNG")
    for image in imagesPng: 
        #if(!image.re.compile('[.Icons.]') && !image.re.compile('[.icons.]'))
        print(image['src']+'\n')
'''
print("A")
for image in imagesIna: 
    print(image['href']+'\n')'''
# Print the first few characters
