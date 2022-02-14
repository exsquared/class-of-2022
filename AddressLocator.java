import java.io.*;
import java.util.*;
import java.util.regex.*;

public class AddressLocator{
    private static String path[] = {
        "C:\\Users\\lkaushik\\Downloads\\Contact Greg Alford of Alford Homes Dallas.mhtml", //0
        "C:\\Users\\lkaushik\\Downloads\\New Homes in Dallas, TX _ 572 Communities.mhtml", //1
        "C:\\Users\\lkaushik\\Downloads\\Contact 1ST Choice Realty, Willard Missouri.mhtml", //2
        "C:\\Users\\lkaushik\\Downloads\\Contact Us - Metro Home Builders, Inc.mhtml", //3
        "C:\\Users\\lkaushik\\Downloads\\Downing Farm - Peebles Homes _ New Homes in Dayton.mhtml", //4 
        "C:\\Users\\lkaushik\\Downloads\\Ranch Country Homes - Welcome!.mhtml", //5
        "C:\\Users\\lkaushik\\Downloads\\Contact Us - Affordable Homes Super Center.mhtml", //6
        "C:\\Users\\lkaushik\\Downloads\\Contact Us _ NJ Home Builder.mhtml", //7
        "C:\\Users\\lkaushik\\Downloads\\Contact Us - Equipped to help with your new home - New Energy Homes.mhtml", //8
    };
    public static void main(String[] args) throws Exception{
        String content = readFile(path[0]);
        if(content == null){
            System.out.println("Content not parsed");
            return;
        }
        List<String> all_links = findAllLinks(content);
        if(all_links==null){
            System.out.println("Links not found");
            return;
        }
        List<String> map_links = findAllMapLinks(all_links);
        if(map_links==null){
            System.out.println("map link not found");
            return;
        }
        String address = checkLinks(map_links);
        if(address == null || address.length() == 0){
            System.out.println("No address");
            return;
        }
        System.out.print("Address:- " + address);

    }

    static String readFile(String dir) throws Exception{
        File file = new File(dir);
        BufferedReader br = new BufferedReader(new FileReader(file));
        StringBuilder st = new StringBuilder();
        while((br.readLine()) != null) st.append(br.readLine());
        br.close();
        return st.toString();

    }
    static List<String> findAllLinks(String content){
        List<String> list = new ArrayList<>();
        String regex = "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})";
        Pattern p = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
        Matcher m = p.matcher(content);
        while(m.find()){
            list.add(content.substring(m.start(0), m.end(0)));
            if(list.size() == 0) return null;
        } 
        return list;
    }

    static List<String> findAllMapLinks(List<String> links){
        String arr[]= {"google.com/maps","maps.google.com", "map.google.com"};

        List<String> mapLinks = new ArrayList<>();
        for(String link:links){
            if((link.contains(arr[0]) || link.contains(arr[1]) || link.contains(arr[2])) && !link.contains("google.com/maps/vt"))
            {
                // System.out.print(link);
                mapLinks.add(link);
            }
        }
        if(mapLinks.size() == 0 || mapLinks == null) return null;
        return mapLinks;
    }

    static String checkLinks(List<String> links){
        for(String url : links){
            if(url.contains("embed")){
                if(url.contains("q=")){
                    String address = url.split("q=")[1].split("&")[0].replace("%20", " ").replace('+', ' ').replace("%2C", ",");
                    return address;
                }else if(url.contains("pb=!")){
                    String temp[] = url.split("!2d")[0].split("!3d");
                    String address = temp[0] + " " + temp[0].split("!")[0];
                    return address;
                }
            }
            else if(url.contains("https://maps.google.com/maps?ll=3D")){
                String temp[] = url.split("ll=3D")[1].split(",");
                String latitude = temp[0];
                String longitude = temp[1].split("&amp")[0];
                return latitude+" "+longitude;
            }
            else if(url.contains("@")){
                int index = url.indexOf('@');
                int comma = 0;
                StringBuilder longitude = new StringBuilder();
                StringBuilder latitude = new StringBuilder();
                for(int i=index+1; i<url.length();i++){
                    char ch = url.charAt(i);
                    if(ch == ',') {
                        comma++;
                        continue;
                    }
                    if(comma == 0) longitude.append(ch);
                    else if(comma == 1) latitude.append(ch);
                    if(comma == 2) break;
                }
                List<String> address = new ArrayList<>();
                address.add(longitude.toString());
                address.add(latitude.toString());
                return longitude.toString() + " , " + latitude.toString();
            }
        }
        return null;
    }
}