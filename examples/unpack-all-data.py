import json

with open("data.json", "r") as f:
    data = json.load(f)

# Reformat the data
columns = data["columns"]

# Unpack the data
formatted_data = []
for i, timestamp in enumerate(data["index"]):
    row_data = {"time": timestamp}

    # Unpack the data with all columns
    for col_idx, col_name in enumerate(columns):
        row_data[col_name] = data["data"][i][col_idx]

    # Add derived fields for compatibility/convenience if possible
    if "close" in row_data:
        row_data["value"] = row_data["close"]
    
    if "open" in row_data and "close" in row_data:
        row_data["color"] = (
            "rgba(0, 150, 136, 0.8)"
            if row_data["close"] > row_data["open"]
            else "rgba(255,82,82, 0.8)"
        )

    formatted_data.append(row_data)

# Write the data to a JavaScript file
with open("app-data.js", "w") as f:
    f.write(
        "const data = " + json.dumps(formatted_data[:500]) + ";"
    )  # Limit to 500 data points for performance

print("Data processed and saved to examples/data/app-data.js")
