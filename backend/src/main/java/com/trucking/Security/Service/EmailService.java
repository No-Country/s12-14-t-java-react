package com.trucking.Security.Service;

import com.trucking.Security.Dto.DataForgotPasswordDto;
import com.trucking.Security.config.JwtService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender javaMailSender;
    private final TemplateEngine templateEngine;
    private final JwtService jwtService;

    @Value("${mail.urlFront}")
    private String urlNewPassword;

    @Value("${spring.mail.username}")
    private String emailFrom;

    public void setEmail(DataForgotPasswordDto dataForgotPasswordDto) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            Context context = new Context();
            Map<String, Object> model = new HashMap<>();
            model.put("email", emailFrom);
            model.put("url", urlNewPassword + dataForgotPasswordDto.getToken());
            model.put("username", dataForgotPasswordDto.getName());
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

}
