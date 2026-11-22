import os

root_dir = r"C:\Web_Templates\Snappy_Gifts\giftseccomerce-website"
print("Root directory files:")
for f in os.listdir(root_dir):
    p = os.path.join(root_dir, f)
    if os.path.isfile(p):
        print(f"{f}: {os.path.getsize(p)} bytes")

scripts_dir = os.path.join(root_dir, "scripts")
if os.path.exists(scripts_dir):
    print("\nScripts dir:")
    for f in os.listdir(scripts_dir):
        if "screenshot" in f.lower() or "capture" in f.lower() or "smoke" in f.lower():
            print(f)
