import subprocess

src_font = "/home/j-j-i10b111a/mirae_neural_font/fonts/source/source_font.ttf"
charset = "KR"
sample_count = 1000
sample_dir = "dir"
filter_option = "--filter=1"
shuffle_option = "--shuffle=1"
mode_option = "--mode=font2font"

for label in range(7, 8):
    label_str = str(label).zfill(2)

    dst_font = f"/home/j-j-i10b111a/mirae_neural_font/fonts/target/{label_str}.ttf"
    label_option = f"--label={label}"

    command = [
        "python",
        "font2img.py",
        "--src_font=" + src_font,
        "--dst_font=" + dst_font,
        "--charset=" + charset,
        "--sample_count=" + str(sample_count),
        "--sample_dir=" + sample_dir,
        label_option,
        filter_option,
        shuffle_option
    ]

    subprocess.run(command)
