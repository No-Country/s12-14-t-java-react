package com.trucking.entity.audit;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

/**
 * @author ROMULO
 * @package com.trucking.entity.audit
 * @license Lrpa, zephyr cygnus
 * @since 4/12/2023
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
public abstract class Auditable<T,K> {

    @CreatedDate
    @Column(name = "created_date", columnDefinition = "TIMESTAMP")
    protected T createdDate;

    @LastModifiedDate
    @Column(name = "last_modified_date", columnDefinition = "TIMESTAMP")
    protected T lastModifiedDate;

    @CreatedBy
    private K createdBy;

    @LastModifiedBy
    private K updatedBy;
}
