from openai import OpenAI
client = OpenAI()

def generate_schema(prompt):
    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Generate normalized DB schema JSON"},
            {"role": "user", "content": prompt}
        ]
    )
    return res.choices[0].message.content
