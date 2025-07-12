import json

with open("data.json", "r") as f:
    data = json.load(f)

# Reformat the data
formatted_data = []
for i, timestamp in enumerate(data["index"]):
    formatted_data.append(
        {
            "time": timestamp,
            "open": data["data"][i][0],
            "high": data["data"][i][1],
            "low": data["data"][i][2],
            "close": data["data"][i][3],
            "value": data["data"][i][3],  # Use close for single-value series
            "color": (
                "rgba(0, 150, 136, 0.8)"
                if data["data"][i][3] > data["data"][i][0]
                else "rgba(255,82,82, 0.8)"
            ),
        }
    )

# # Create a JavaScript file with the data
# with open("app-data.js", "w") as f:
#     f.write(
#         "const data = " + json.dumps(formatted_data[:500]) + ";"
#     )  # Limit to 500 data points for performance

# print("Data processed and saved to examples/data/app-data.js")


# Reformat the data
formatted_data = []
for i, timestamp in enumerate(data["index"]):
    formatted_data.append(
        {
            "time": timestamp,
            "open": data["data"][i][0],
            "high": data["data"][i][1],
            "low": data["data"][i][2],
            "close": data["data"][i][3],
            "value": data["data"][i][3],  # Use close for single-value series
            "color": (
                "rgba(0, 150, 136, 0.8)"
                if data["data"][i][3] > data["data"][i][0]
                else "rgba(255,82,82, 0.8)"
            ),
        }
    )

# Create a JavaScript file with the data
with open("app-data.js", "w") as f:
    f.write(
        "const data = " + json.dumps(formatted_data[:500]) + ";"
    )  # Limit to 500 data points for performance

print("Data processed and saved to examples/data/app-data.js")
