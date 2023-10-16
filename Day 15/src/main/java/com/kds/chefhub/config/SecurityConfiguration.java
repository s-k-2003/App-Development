package com.kds.chefhub.config;

import static com.kds.chefhub.model.enumerate.Permission.ADMIN_CREATE;
import static com.kds.chefhub.model.enumerate.Permission.ADMIN_DELETE;
import static com.kds.chefhub.model.enumerate.Permission.ADMIN_READ;
import static com.kds.chefhub.model.enumerate.Permission.ADMIN_UPDATE;
import static com.kds.chefhub.model.enumerate.Permission.STAFF_CREATE;
import static com.kds.chefhub.model.enumerate.Permission.STAFF_DELETE;
import static com.kds.chefhub.model.enumerate.Permission.STAFF_READ;
import static com.kds.chefhub.model.enumerate.Permission.USER_READ;

import java.util.Arrays;

import static com.kds.chefhub.model.enumerate.Permission.USER_CREATE;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.web.cors.CorsConfiguration;

import com.kds.chefhub.model.enumerate.Permission;
import com.kds.chefhub.model.enumerate.Role;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {
    
    private final JwtAuthencationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;
    

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorize -> authorize.requestMatchers("/api/v1/**").permitAll()
                        //Roles & Permissions
                        .requestMatchers("/api/v1/staff/**").hasAnyRole(Role.ADMIN.name(), Role.STAFF.name())


                        .requestMatchers(HttpMethod.GET, "/api/v1/staff/**").hasAnyAuthority(ADMIN_READ.name(), STAFF_READ.name())
                        .requestMatchers(HttpMethod.POST, "/api/v1/staff/**").hasAnyAuthority(ADMIN_CREATE.name(), STAFF_CREATE.name())
                        .requestMatchers(HttpMethod.PUT, "/api/v1/staff/**").hasAnyAuthority(ADMIN_UPDATE.name(), Permission.STAFF_UPDATE.name())
                        .requestMatchers(HttpMethod.DELETE, "/api/v1/staff/**").hasAnyAuthority(ADMIN_DELETE.name(), STAFF_DELETE.name())


                        .requestMatchers(HttpMethod.GET, "/api/v1/user/**").hasAnyAuthority(USER_READ.name())
                        .requestMatchers(HttpMethod.POST, "api/v1/user/**").hasAnyAuthority(USER_CREATE.name())


                        //    .requestMatchers("/api/v1/admin/**").hasRole(Role.ADMIN.name())
                        //    .requestMatchers(HttpMethod.GET, "api/v1/admin/**").hasAuthority(Permission.ADMIN_READ.name())
                        //    .requestMatchers(HttpMethod.POST, "api/v1/admin/**").hasAuthority(Permission.ADMIN_CREATE.name())
                        //    .requestMatchers(HttpMethod.PUT, "api/v1/admin/**").hasAuthority(Permission.ADMIN_UPDATE.name())
                        //    .requestMatchers(HttpMethod.DELETE, "api/v1/admin/**").hasAuthority(Permission.ADMIN_DELETE.name())

                        //END
                        
       
                        .anyRequest().authenticated())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
               
               .cors().and()

                .logout(logout -> 
                logout
                .logoutUrl("/api/v1/admin/logout")
                
                .addLogoutHandler(logoutHandler)

            

                .logoutSuccessHandler((request, response, authentication)->SecurityContextHolder.clearContext())
                
                );
        return http.build();

    }
}
