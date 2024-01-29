package com.nofriend.sonmandube.util;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Getter
@AllArgsConstructor
public class FileUtil {

    private static final String FILENAME_PREFIX = "손만두 ";
    private static final String FILENAME_POSTFIX = "체";

    /*
    지정된 이름으로 폰트 파일을 저장하고 해당 경로를 반환
     */
    public static FileDto uploadFontFile(String fontName, MultipartFile file) {
        String folder = FileFolderType.FONT.value();
        String filename = changedFontName(fontName, file);
        return uploadFile(folder, filename, file);
    }

    /*
    이미지 파일을 저장하고 해당 경로를 반환
     */
    public static FileDto uploadImageFile (MultipartFile file) {
        String folder = FileFolderType.IMAGE.value();
        String filename = UUID.randomUUID()
                + StringUtils.getFilename(file.getOriginalFilename());
        return uploadFile(folder, filename, file);
    }

    /*
    폴더, 이름, 파일을 통해 파일을 저장하고 해당 경로를 반환
     */
    private static FileDto uploadFile(String folder, String filename, MultipartFile file) {
        String fileRootPath = createRootDirPath(folder);
        try {
            String fullPath = fileRootPath+ "/"+filename;
            Path path = Paths.get(fullPath).toAbsolutePath();
            file.transferTo(path.toFile());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return new FileDto(toFileUrl(folder+"/"+filename));
    }

    // 파일 저장 루트 경로
    private static String createRootDirPath(String folder) {
        return "/sonmando-store/file/"+folder;
    }

    // 사용자가 지정한 폰트명으로 파일 이름 변경
    private static String changedFontName(String fontName, MultipartFile image) {
        String originName = FILENAME_PREFIX + fontName + FILENAME_POSTFIX;
        String extension = StringUtils.getFilenameExtension(image.getOriginalFilename());
        return originName+"."+extension;
    }

    // 파일 저장 경로 바탕으로 파일 url 생성
    public static String toFileUrl(String fileFullPath) {
        String fileResponsePath = "http://localhost:8080/files/" + fileFullPath;
        return fileResponsePath;
    }
}
