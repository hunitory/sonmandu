package com.nofriend.sonmandube.util;

public enum FileFolderType {
    FONT("font"), IMAGE("image");

    private final String value;

    FileFolderType(String value) {
        this.value = value;
    }

    public String value(){
        return this.value;
    }

}
