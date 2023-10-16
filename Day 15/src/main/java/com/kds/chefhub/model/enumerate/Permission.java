package com.kds.chefhub.model.enumerate;

import lombok.Getter;
import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
public enum Permission {

    ADMIN_READ("admin:READ"),
    ADMIN_CREATE("admin:CREATE"),
    ADMIN_UPDATE("admin:UPDATE"),
    ADMIN_DELETE("admin:DELETE"),

    STAFF_READ("staff:READ"),
    STAFF_CREATE("staff:CREATE"),
    STAFF_UPDATE("staff:UPDATE"),
    STAFF_DELETE("staff:DELETE"),

    USER_READ("user:READ"),
    USER_CREATE("user:CREATE")
    ;
    
    @Getter
    private final String permission;



}
