package com.trucking.Security.Entity;

import com.trucking.Entity.Company;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

/**
 * Entidad que representa a un usuario en la aplicación.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users", uniqueConstraints = {@UniqueConstraint(columnNames = "email")})
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    @ManyToOne
    private Company company;
    @Enumerated(EnumType.STRING)
    private RoleName role;
    private String tokenPassword;

    /**
     * Obtiene la colección de autoridades (roles) del usuario.
     *
     * @return Colección de autoridades del usuario.
     */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority((role.name())));
    }

    /**
     * Obtiene el nombre de usuario del usuario.
     *
     * @return Nombre de usuario (correo electrónico) del usuario.
     */
    @Override
    public String getUsername() {
        return email;
    }

    //Se podria omitir ya que el atributo se llama password y por lombbok tenemos el getPassword()
    /**
     * Obtiene la contraseña del usuario.
     *
     * @return Contraseña del usuario.
     */
    @Override
    public String getPassword() {
        return password;
    }

    /**
     * Verifica si la cuenta del usuario ha expirado.
     *
     * @return `true` si la cuenta no ha expirado, `false` si ha expirado.
     */
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    /**
     * Verifica si la cuenta del usuario está bloqueada.
     *
     * @return `true` si la cuenta no está bloqueada, `false` si está bloqueada.
     */
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    /**
     * Verifica si las credenciales del usuario han expirado.
     *
     * @return `true` si las credenciales no han expirado, `false` si han expirado.
     */
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    /**
     * Verifica si el usuario está habilitado.
     *
     * @return `true` si el usuario está habilitado, `false` si no está habilitado.
     */
    @Override
    public boolean isEnabled() {
        return true;
    }
}
