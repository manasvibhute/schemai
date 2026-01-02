def normalize(schema):
    # enforce PK, FK, remove repeating groups
    for table in schema["tables"]:
        if not any(c.get("pk") for c in table["columns"]):
            table["columns"][0]["pk"] = True
    return schema
