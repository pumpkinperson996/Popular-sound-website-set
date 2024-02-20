import re
from urllib.parse import urlparse

def extract_bvids_from_urls(urls):
    # Define a list to hold the results
    results = []
    
    # Loop through each URL in the input list
    for url in urls:
        # Parse the URL
        parsed_url = urlparse(url)
        
        # Extract the path part of the URL
        path = parsed_url.path
        
        # Use a regular expression to find the Bilibili video ID
        match = re.search(r'\/video\/(BV[0-9A-Za-z]+)', path)
        if match:
            bvid = match.group(1)
            # Manually format the string to match the desired output
            formatted_result = '{ bvid: "' + bvid + '" },'
            results.append(formatted_result)
    
    # Return all results
    return results

# Example usage with a list of URLs
urls = [
    "https://www.bilibili.com/video/BV1A24y1y7gF/?spm_id_from=333.999.0.0",
    "https://www.bilibili.com/video/BV1oV411Q7tm/?spm_id_from=333.999.0.0",
    "https://www.bilibili.com/video/BV1t14y1p7K5/?spm_id_from=333.999.0.0",
    "https://www.bilibili.com/video/BV1Qa411y7Dz/?spm_id_from=333.999.0.0&vd_source=3cbbd6df7b209a4d83da6616724bef51",
    
    
    # Add more URLs as needed
]

# Extract Bilibili video IDs from the list of URLs
results = extract_bvids_from_urls(urls)

# Print the results
for result in results:
    print(result)
