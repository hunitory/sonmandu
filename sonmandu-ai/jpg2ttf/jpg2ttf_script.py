import os
import subprocess

def run_command(command):
    # subprocess 모듈을 사용하여 명령어를 실행합니다.
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()  # 명령어 실행 결과를 저장합니다.
    
    # 실행 결과를 출력합니다.
    if stdout:
        print(stdout.decode())
    if stderr:
        print(stderr.decode())


###
# 생성할 폰트 명
###
name = 'seohyeon'



###
# data안의 각 폴더 속 데이터 삭제
###
# jpg 이미지 파일들 삭제
# for file in os.listdir('data/jpg_images'):
#     os.remove(file)
# svg 이미지 파일들 삭제
print('::: data/svg_images 파일 삭제 시작')
jpg_folder = 'data/svg_images'
for file in os.listdir(jpg_folder):
    file_path = os.path.join(jpg_folder, file)
    try:
        if os.path.isfile(file_path):
            os.remove(file_path)
    except Exception as e:
        print(e)
print('::: data/svg_images 파일 삭제 완료')

###
# jpg to svg
###
# jpg2svg 폴더로 이동합니다.
os.chdir('jpg2svg')
# Gulp를 실행합니다.
run_command('gulp')
print('::: jpg -> svg 변환 완료')
# jpg2svg 폴더를 나와 svgicons2svgfont/bin으로 이동
os.chdir('../svgicons2svgfont/bin')

###
# svg images to one svg file
###
# svgicons2svgfont.js 명령어를 실행합니다.
run_command(f'node svgicons2svgfont.js --fontname={name} -o ../../data/svg/{name}.svg ../../data/svg_images/*.svg')
print('::: svg files -> svg 변환 완료')
# svg 폴더로 이동
os.chdir('../../data')


###
# svg to ttf
###
# svg2ttf 명령어를 실행합니다.
run_command(f'svg2ttf svg/{name}.svg font/{name}.ttf')
print('::: ttf 파일 생성')
