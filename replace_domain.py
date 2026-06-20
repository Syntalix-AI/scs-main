import os

directory = r"c:\d DRIVE\consultancy_website"
old_domain = "syntalixconsultancy.in"
new_domain = "syntalixconsultancy.com"

# Directories and files to process
targets = [
    os.path.join(directory, "src"),
    os.path.join(directory, "ACTION-PLAN.md"),
    os.path.join(directory, "FULL-AUDIT-REPORT.md")
]

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if old_domain in content:
            new_content = content.replace(old_domain, new_domain)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

for target in targets:
    if os.path.isfile(target):
        replace_in_file(target)
    elif os.path.isdir(target):
        for root, _, files in os.walk(target):
            for file in files:
                if file.endswith(('.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.html', '.css')):
                    replace_in_file(os.path.join(root, file))

print("Domain replacement complete.")
