package com.trucking.security.service;

import com.trucking.security.dto.ChangePasswordDto;
import com.trucking.security.dto.DataChangePasswordEmployee;
import com.trucking.security.dto.DataForgotPasswordDto;
import com.trucking.security.config.JwtService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.util.HashMap;
import java.util.Map;

@Service
public class EmailService {

    @Autowired
    private final JavaMailSender javaMailSender;

    @Autowired
    private final TemplateEngine templateEngine;
    @Value("${mail.urlFront}")
    private String urlNewPassword;

    @Value("${spring.mail.username}")
    private String emailFrom;

    public EmailService(JavaMailSender javaMailSender, TemplateEngine templateEngine) {
        this.javaMailSender = javaMailSender;
        this.templateEngine = templateEngine;
    }

    public void setEmail(DataForgotPasswordDto dataForgotPasswordDto){
        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            Context context = new Context();
            Map<String, Object> model = new HashMap<>();
            model.put("email", emailFrom);
            model.put("url", urlNewPassword + dataForgotPasswordDto.getToken());
            model.put("userName", dataForgotPasswordDto.getName());
            context.setVariables(model);

            String htmlText = templateEngine.process("email-template", context);
            helper.setSubject("Cambiar contraseña de tu cuenta de Trucking");
            helper.setFrom(emailFrom);
            helper.setTo(dataForgotPasswordDto.getEmail());
            helper.setText(htmlText, true);

            javaMailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
    public void setNewEmployeeEmail(DataForgotPasswordDto dataForgotPasswordDto, String password){
        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            Context context = new Context();
            Map<String, Object> model = new HashMap<>();
            model.put("email", emailFrom);
            model.put("userName", dataForgotPasswordDto.getName());
            model.put("password", password);
            context.setVariables(model);

            String htmlText = templateEngine.process("email-template-password", context);
            helper.setSubject("Cambiar contraseña de tu cuenta de Trucking");
            helper.setFrom(emailFrom);
            helper.setTo(dataForgotPasswordDto.getEmail());
            helper.setText(htmlText, true);

            javaMailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
