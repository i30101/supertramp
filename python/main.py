from collections import Counter
import re
import pandas as pd

# Function to clean and split the text into words
def clean_and_split(text):
    # Remove punctuation and make lowercase
    text = re.sub(r'[^\w\s]', '', text).lower()
    # Split into words
    words = text.split()
    return words

# Function to count word frequencies
def count_word_frequencies(words):
    return Counter(words)

# Read the text file
with open('./python/into-the-wild.txt', 'r', encoding='utf-8') as file:
    text = file.read()

# Clean and split the text
words = clean_and_split(text)

# Count word frequencies
word_frequencies = count_word_frequencies(words)

# Sort the word frequencies by frequency in descending order
sorted_word_frequencies = word_frequencies.most_common()

# Convert the sorted word frequencies to a DataFrame
df = pd.DataFrame(sorted_word_frequencies, columns=['Word', 'Frequency'])

# Write the DataFrame to a CSV file
df.to_csv("frequencies.csv", index=False, encoding='utf-8')

print("Word frequencies have been written to frequencies.csv")