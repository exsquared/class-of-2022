import re
from bs4 import BeautifulSoup
from click import style


def find_images(filePath):
    with open(filePath, encoding="utf-8") as file:
        soup = BeautifulSoup(file, 'html.parser')
    all_img_tag = soup.find_all('img')
    all_div_tag = soup.find_all('div')
    image_links = []

    for img in all_img_tag:
        if img.has_attr('src') and (img['src'].endswith('.jpg') or img['src'].endswith('.jpeg') or img['src'].endswith('.png')):
            image_links.append(img['src'])

    for div in all_div_tag:
        if div.has_attr('style') and 'background-image' in div['style']:
            image_links.append(div)

    image_links = set(image_links)
    print(*image_links, sep="\n")


#####################################
find_images("C:\\Users\\lkaushik\\Desktop\\property Image\\3308 Club Court _ New Homes in Naperville IL _ Eastman Properties.html")  # 23
# find_images("C:\\Users\\lkaushik\\Desktop\\property Image\\7138 Cassidy Court #Lot 219, Victor, NY 14564 (MLS # R1389188) _ Morrell Builders.html") #16
# find_images("C:\\Users\\lkaushik\\Desktop\\property Image\\CAREFREE LIVING IN THE ENCLAVE AT AUGUSTA GREEN - Spencer Homes, LLC.html") #50
# find_images("C:\\Users\\lkaushik\\Desktop\\property Image\\Francis ADU 896 _ Skagit Design Homes.html") #8
# find_images("C:\\Users\\lkaushik\\Desktop\\property Image\\Home Plans - Severyn Development.html") #82
# find_images("C:\\Users\\lkaushik\\Desktop\\property Image\\Huntington - Newport Homes.html") #82
# find_images("C:\\Users\\lkaushik\\Desktop\\property Image\\McCabe Floor Plan _ Heartland Builders.html") #15
# find_images("C:\\Users\\lkaushik\\Desktop\\property Image\\The Westbrook _ Inspired Homes.html") #52
#####################################
