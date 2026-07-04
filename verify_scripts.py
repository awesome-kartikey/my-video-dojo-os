import re
import sys
import os

FILES_TO_CHECK = [
    "my-video/NEW_REMOTION_SCRIPT.md",
    "my-video/ELEVENLABS_TTS_SCRIPT.md"
]

# Regex patterns with word boundaries to ensure we find standalone numbers
# and avoid partial matches in frame counts (e.g. 1899) or durations.
FORBIDDEN_PATTERNS = {
    "119.8": re.compile(r"\b119\.8\b"),
    "502": re.compile(r"\b502\b"),
    "419": re.compile(r"\b419\b"),
    "42": re.compile(r"\b42\b"),
    "89": re.compile(r"\b89\b"),
    "3.2": re.compile(r"\b3\.2\b")
}

def verify_files():
    failures = 0
    print("Starting verification of script markdown files...")
    
    # Resolve paths relative to the project root (where this script resides or one level up)
    # The script will be run from the workspace root: python my-video/verify_scripts.py
    for file_path in FILES_TO_CHECK:
        if not os.path.exists(file_path):
            print(f"Error: File not found: {file_path}")
            failures += 1
            continue
            
        print(f"Checking {file_path}...")
        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
            
        for line_num, line in enumerate(lines, 1):
            for name, pattern in FORBIDDEN_PATTERNS.items():
                matches = pattern.findall(line)
                if matches:
                    print(f"  [FAIL] Line {line_num}: Found legacy number '{name}' in line: {line.strip()}")
                    failures += len(matches)
                    
    if failures > 0:
        print(f"\nVerification FAILED. Found {failures} legacy hardcoded numbers.")
        sys.exit(1)
    else:
        print("\nVerification PASSED. No legacy hardcoded numbers found.")
        sys.exit(0)

if __name__ == "__main__":
    verify_files()
