# Trucking 
![logo_trucking](https://ik.imagekit.io/ljpa/Proyectos/logo_trucking.png)
Trucking es una web app diseñada para que una empresa puede crear una cuenta y administrar su flota de vehículos, teniendo datos de uso y mantenimiento, que mejoran la eficiencia y reduce la tasa de fallas en las unidades, lo que representa para la empresa un ahorro de capital y mejora en el servicio
## Video
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=YouTube&logoColor=white)](https://www.youtube.com/watch?v=nGajJbYqKp4)

## Deploy

https://s12-14-t-java-react.vercel.app/

## Características

El sistema permite al usuario:

-  Garantizar un seguimiento eficiente y preventivo de los mantenimientos de la flota de vehículos, optimizando la seguridad, confiabilidad y rendimiento de cada unidad.

-  Facilitar la revision diaria de los vehiculos y reporte de fallas por parte de los choferes.


-  Llevar un registro preciso y detallado de las horas trabajadas por cada conductor, facilitando la gestión de recursos humanos, el cumplimiento normativo y la eficiencia operativa.


## Documentación

[Documentación]( https://bump.sh/maipevi/doc/nocountry)


## Agradecimientos

 - [NoCountry](https://www.nocountry.tech/)
 

## Team

### UX/UI

#### Tecnologías

[![Figma](https://img.shields.io/badge/Figma-000000.svg?style=for-the-badge&logo=Figma&logoColor=white)]([https://www.figma.com/file/2oY81GBY08vo9Cee4FItFm/Veterinaria?type=design&node-id=1-2&mode=design&t=T1TaNO00BVzAYtAJ-0](https://www.figma.com/file/4Hl2nGFI94st5GbSs9Jfy9/Trucking?type=design&node-id=595%3A8008&mode=design&t=TPBBLUNUXVgQYv9K-1)) ![Cloudinary](https://img.shields.io/badge/Cloudinary-%231563FF.svg?&style=for-the-badge&logo=google-cloud&logoColor=white)

#### Tareas

-  Wireframes, prototipo y  kit UI desarrollado en Figma.
-  Canva como herramienta de video y maquetado.


#### Designers

|<img style="width: 150px" src="https://media.licdn.com/dms/image/D4D35AQFIzLTxChoeKQ/profile-framedphoto-shrink_400_400/0/1675819462626?e=1703757600&v=beta&t=CCuS-mkQjOOjgeMyBWrsIl0Oq9EOQyP2j3ivnnYUICA">|
| :--------: |
|[![Behance](https://img.shields.io/badge/Behance-1769FF?style=for-the-badge&logo=Behance&logoColor=white)](https://www.behance.net/vaninarestelli) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/florencia-bonduel-5b2398226/) | 
|**Florencia Bonduel**| 

</br>

## Backend
```
└── 📁backend
    └── docker-compose.yml
    └── Dockerfile
    └── mvnw
    └── mvnw.cmd
    └── pom.xml
    └── 📁src
        └── 📁main
            └── 📁java
                └── 📁com
                    └── 📁trucking
                        └── BackendApplication.java
                        └── 📁config
                            └── PersistenceConfig.java
                        └── 📁controller
                            └── EmployeeController.java
                            └── ManTypeController.java
                            └── NewDriver.java
                            └── RegMantenController.java
                            └── VehicleController.java
                            └── VehicleListController.java
                        └── 📁dto
                            └── 📁employee
                                └── DataNewEmployee.java
                                └── DataShowEmployee.java
                                └── DriverEmployeeDto.java
                                └── NewEmployee.java
                                └── UpdateEmployee.java
                            └── 📁mantype
                                └── ManTypeInitializer.java
                                └── ManTypesDto.java
                            └── 📁pageable
                                └── PageableDto.java
                            └── 📁regmant
                                └── NewRegMantDto.java
                                └── UpdateRegMant.java
                            └── 📁vehicle
                                └── ReasonDto.java
                                └── VehicleDto.java
                        └── 📁entity
                            └── 📁audit
                                └── Auditable.java
                                └── AuditorAwareImpl.java
                            └── Company.java
                            └── 📁enums
                                └── FailState.java
                                └── FailType.java
                            └── Fail.java
                            └── Fuel.java
                            └── ManType.java
                            └── RegMaint.java
                            └── Vehicle.java
                            └── VehicleType.java
                        └── 📁exception
                            └── DuplicateEntityException.java
                            └── ErrorResponseMessage.java
                            └── ExceptionController.java
                            └── GenericException.java
                            └── GlobalHandlerException.java
                            └── InputNotValidException.java
                            └── ManTypeNotFound.java
                            └── NotFoundVehicle.java
                            └── ResourceNotFoundException.java
                        └── 📁mapper
                            └── VehicleMapper.java
                            └── VehicleMapperImpl.java
                        └── 📁repository
                            └── CompanyRepository.java
                            └── EmployeeRepository.java
                            └── FuelRepository.java
                            └── ManTypeRepository.java
                            └── VehicleRepository.java
                            └── VehicleTypeRepository.java
                        └── 📁security
                            └── 📁auth
                                └── AuthController.java
                                └── AuthenticationService.java
                            └── 📁config
                                └── ApplicationConfig.java
                                └── CorsConfig.java
                                └── JwtAuthenticationFilter.java
                                └── JwtService.java
                                └── OpenApiConfig.java
                                └── SecurityConfig.java
                            └── 📁demo
                                └── DemoController.java
                            └── 📁dto
                                └── AuthenticationResponseDto.java
                                └── ChangePasswordDto.java
                                └── DataChangePasswordEmployee.java
                                └── DataForgotPasswordDto.java
                                └── ErrorMsgDto.java
                                └── ForgotPasswordDto.java
                                └── LoginUserDto.java
                                └── MsgDto.java
                                └── NewUserDto.java
                                └── RecoverPasswordDto.java
                                └── ShowDataUserDto.java
                            └── 📁entity
                                └── RoleName.java
                                └── User.java
                            └── 📁exception
                                └── HandlerErrors.java
                                └── ValidationIntegrity.java
                            └── 📁repository
                                └── RegMantRepository.java
                                └── UserRepository.java
                            └── 📁service
                                └── EmailService.java
                                └── UserServiceImplement.java
                        └── 📁service
                            └── CompanyService.java
                            └── EmployeeService.java
                            └── 📁generic
                                └── ApiCrudGeneric.java
                            └── 📁implement
                                └── CompanyServiceImpl.java
                                └── EmployeeServiceImplement.java
                                └── ManTypeServiceImplement.java
                                └── RegMantServiceImplement.java
                            └── ManTypeService.java
                            └── RegMantService.java
                            └── VehicleService.java
                            └── VehicleServiceImpl.java
                        └── 📁util
                            └── DefaultFuelTypes.java
                            └── DefaultVehicleTypes.java
                            └── FuelTypeInitializer.java
                            └── Utility.java
                            └── VehicleTypeInitializer.java
            └── 📁resources
                └── .env
                └── application-dev.properties
                └── application-prod.properties
                └── application-qa.properties
                └── application.properties
                └── 📁templates
                    └── email-template-password.html
                    └── email-template.html
        └── 📁test
            └── 📁java
                └── 📁com
                    └── 📁trucking
                        └── BackendApplicationTests.java
```
#### Technologies

![Java](https://img.shields.io/badge/Java-C21325?style=for-the-badge&logo=oracle&logoColor=white)
![SpringBoot](https://img.shields.io/badge/spring_boot-339933?style=for-the-badge&logo=Spring&logoColor=white) ![MySql](https://img.shields.io/badge/Mysql-1769FF?style=for-the-badge&logo=mysql&logoColor=white)
#### Tasks

-  Development of Rest Api with NodeJs and Express.
-  Validations with Express Validator.
-  MongoDb Database.
-  Creating filters with Mongoose
-  Users validation with JWT and Google.
-  For email notifications Nodemailer.
-  Deployed on Railway.

#### Developers

| <img style="width: 200px" src="https://media.licdn.com/dms/image/D4E03AQEayo3FdYrIdw/profile-displayphoto-shrink_800_800/0/1686776894638?e=1708560000&v=beta&t=nF_Ql4m3tV27cTa4w60i6SBv2JesSFd7wG0EWSKepYo"> | <img style="width: 200px" src="https://media.licdn.com/dms/image/D4D35AQHw0QZQnP9KGQ/profile-framedphoto-shrink_200_200/0/1695738700311?e=1703854800&v=beta&t=OlNTEjozjsIaoBt2Oar7_GRMftm9ghcrwgQZ6fw5D6w">| <img style="width: 200px" src="https://media.licdn.com/dms/image/D4D35AQHkzKRubqyxOw/profile-framedphoto-shrink_800_800/0/1691798665822?e=1703854800&v=beta&t=SgW-DFNesOBjsIYMteao92ITA_DY2FJUDca_I1PgNBg">|<img style="width: 200px" src="https://media.licdn.com/dms/image/D4E35AQF5crW3WTV8AA/profile-framedphoto-shrink_800_800/0/1666399893747?e=1703854800&v=beta&t=J2ClDKBnqVXTSRxBk6rrZVq55xLucgvXPr92GUJIdsQ">|
| :-------: | :------: | :------------------------: | :--------------: |
|[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/luis-peche/) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/Rpeche-pk) |[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/juan-emilio-busalmen-50ba30220) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/jebius76)|[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/johanacarrizo/) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/JohanaCarrizo)|[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/stephany-castro-salas/) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/StephanyCS1/)|
| **Luis Peche Aparcana** | **Juan Emilio Busalmen** | **Johana Carrizo** | **Stephany Castro Salas** |

</br>

## Frontend
```
└── 📁frontend
    └── 📁frontend-app
        └── .env
        └── .eslintrc.cjs
        └── index.html
        └── package-lock.json
        └── package.json
        └── postcss.config.js
        └── 📁public
            └── favicon.ico
            └── 📁img
                └── arrowBack.svg
                └── arrowForward.svg
                └── arrowRight.svg
                └── auto.svg
                └── chofer.png
                └── deleteIcon.svg
                └── editIcon.svg
                └── encrypted.svg
                └── gmail.svg
                └── iconCheckTextField.svg
                └── iconErrorTextField.svg
                └── img-Das.png
                └── logo.svg
                └── UC.jpg
        └── README.md
        └── 📁src
            └── 📁api
                └── PageApi.js
                └── vehicleApi.jsx
            └── App.jsx
            └── 📁components
                └── 📁DashboardAdmiComp
                    └── Fecha.jsx
                    └── Hora.jsx
                    └── Switch.jsx
                └── DatosPersonalesChofer.jsx
                └── 📁DriverMenu
                    └── DriverMenu.jsx
                └── 📁Empleado
                    └── Empleado.jsx
                └── 📁FleetVehicles
                    └── CardVehicleNotWorking.jsx
                    └── CardVehicleOnWorking.jsx
                    └── MaintenanceVehicleForm.jsx
                    └── PanelVehiclesNotWorking.jsx
                    └── PanelVehiclesOnWorking.jsx
                └── 📁HistoryMaintenance
                    └── CardHistoryMaintenance.jsx
                    └── HistorialMantenimiento.css
                    └── PanelHistoryMaintenance.jsx
                └── 📁HomeSlider
                    └── HomeSlider.css
                    └── HomeSlider.jsx
                └── 📁LatestMaintenance
                    └── CardMaintenance.jsx
                    └── LatestMaintenance.css
                    └── PanelMaintenance.jsx
                └── Logo.jsx
                └── 📁MaintenanceMenu
                    └── MaintenanceMenu.jsx
                └── 📁Mantenimiento
                    └── MantenimientoBoard.jsx
                └── 📁ModificarContrasena
                    └── ModificarContrasena.css
                    └── ModificarContrasena.jsx
                └── 📁ModificarContrasenaChofer
                    └── ModificarContrasenaChofer.css
                    └── ModificarContrasenaChofer.jsx
                └── 📁NewProfileEmployee
                    └── NewProfile.jsx
                └── 📁PanelGeneralChofer
                    └── PanelGeneral.jsx
                    └── PanelGeneralChofer.css
                    └── RevisionChofer.jsx
                └── 📁Register
                    └── FormRegister.jsx
                └── 📁RevisionDiaria
                    └── CardRevision.jsx
                    └── Revision.jsx
                └── 📁SideMenu
                    └── SideMenu.jsx
                └── SimpleDatePicker.jsx
                └── 📁Vehiculos
                    └── AddVehiculeBoard.jsx
            └── 📁helpers
                └── getEnvVariables.js
            └── 📁hooks
                └── useAuthStore.js
                └── useEmployee.js
                └── useForm.js
                └── useVehicles.js
            └── index.css
            └── main.jsx
            └── 📁pages
                └── AddVehicle.jsx
                └── DashboardAminis.jsx
                └── DashboardGerente.jsx
                └── DashboardMantenimientoInicial.jsx
                └── DashboardNewProfile.jsx
                └── DashboardVehicles.jsx
                └── EliminarVehiculo.jsx
                └── Empleados.jsx
                └── HistoryMaintenance.jsx
                └── Homepage.jsx
                └── LatestMaintenance.jsx
                └── Register.jsx
                └── RegistroMantenimiento.jsx
                └── RegistroMantenimientoMan.jsx
                └── RevisionDiaria.jsx
            └── 📁services
                └── fetchService.jsx
            └── 📁store
                └── 📁auth
                    └── authSlice.js
                └── 📁employees
                    └── employeesSlice.js
                └── store.js
                └── 📁vehicles
                    └── vehiclesSlice.js
            └── 📁styles
                └── DashboardVehicles.css
                └── FormRegister.css
                └── NewProfile.css
        └── tailwind.config.js
        └── vercel.json
        └── vite.config.js
    └── README.md
```
#### Technologies

![React.js](https://img.shields.io/badge/Ract.js-000000?style=for-the-badge&logo=React&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-045600?style=for-the-badge&logo=Vite&logoColor=white) ![TypeScript](https://img.shields.io/badge/Javascript-3178C6?style=for-the-badge&logo=JavaScript&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=Tailwind%20CSS&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-06B36D4?style=for-the-badge&logo=Axios%20CSS&logoColor=white) ![Redux](https://img.shields.io/badge/Redux-0B36D4?style=for-the-badge&logo=Redux%20CSS&logoColor=white)

#### Tasks

-  Development of the view through dynamic components with TypeScript and Next.js.
-  Creating the linked routes of the page using Nextjs. Axios and Nextjs to control and submit form data.
-  Obtaining and uploading images with Cloudinary.
-  Tailwind CSS componentes with DaisyUI
-  Deployment on Vercel.


#### Developers

| <img style="width: 200px" src="https://media.licdn.com/dms/image/D4E03AQESz8PfgdjqUw/profile-displayphoto-shrink_800_800/0/1677185379977?e=1708560000&v=beta&t=F84Mo9Y3P1upKs5yqp6lzLHaC6auMxFaHr_ETKnK7Xo"> | <img style="width: 200px" src="https://media.licdn.com/dms/image/D4D35AQFzbnH5pm3UTw/profile-framedphoto-shrink_800_800/0/1687649939354?e=1703854800&v=beta&t=3eMImzOwHgyZc0L4Y71dd_PmEbKBJRQLybCiHTf5RrQ"> | <img style="width: 200px" src="https://media.licdn.com/dms/image/D4D35AQHXzPN9T1TILQ/profile-framedphoto-shrink_800_800/0/1680475698272?e=1703858400&v=beta&t=zhaByJjpYXRg8pPYhElZ28hHILb7wN7cjjuwrXovEP8"> |
| :--------: | :-------: | :-------------------------: |
| [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/carolina-limay-oliva/) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/Lunisa202) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/carlos-valerio-91b697218) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/CarlosV319) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/lourdes-avalos-91a301255/) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/Lourdes69) |
| **Carolina Limay Oliva** | **Carlos Valerio** | **Lourdes Avalos** |

</br>

| <img style="width: 200px" src="https://media.licdn.com/dms/image/D4E03AQEI84fZA8Koyw/profile-displayphoto-shrink_800_800/0/1699055768532?e=1708560000&v=beta&t=nzv84G5wRVA0g_DyPGuzgCrox1LWlXaUYXFzMHClc4E"> | <img style="width: 200px" src="https://media.licdn.com/dms/image/D4E35AQFQi72qPhc_YQ/profile-framedphoto-shrink_800_800/0/1681434778768?e=1703858400&v=beta&t=YsBM8t2wEnHtUubJ9cOBxFUFCg7ESHdl3qJkcfL-WSs">| <img style="width: 200px" src="https://media.licdn.com/dms/image/D4D35AQHn4ygZgLudTA/profile-framedphoto-shrink_800_800/0/1674522526240?e=1703858400&v=beta&t=sRWzrTRUiIk7nHChb0viJvlQfRsmslTvgeNG-iu_PsU">|<img style="width: 200px" src="https://media.licdn.com/dms/image/D4E35AQEWJ88BsAk8mg/profile-framedphoto-shrink_800_800/0/1689196769965?e=1703858400&v=beta&t=DHZvgxIbJpMfOKRRx6eqL-qPJsCBYP8LERowInICJFA">|
| :-------: | :------: | :------------------------: | :--------------: |
| [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/david-martinez-mata/) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/dv-mata) |[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/esmir-roque/) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/castellano17)| [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://linkedin.com/in/cristian-daniel-toia) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/cricritoia)|[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/marcos-aravena/) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/msaravena)|
| **David Martinez** | **Esmir Roque Castellano** | **Cristian Toai** | **Marcos Aravena** |

</br>

## QA/ Testing/ PM
### QA / Testing & PM

#### Technologies

![Trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=Trello&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

#### Tasks

-  Development of functional requirements.
-  Creation of the test plan.
-  User story acceptance criteria.
-  Test case development.
-  API testing using Postman.
-  Test case execution using equivalence partitioning.
-  Incident form.
-  Exploratory testing.

#### QA Analysts

|<img style="width: 200px" src="https://media.licdn.com/dms/image/D4D35AQEjgBR4y1vM_A/profile-framedphoto-shrink_800_800/0/1641051688338?e=1703858400&v=beta&t=f7gGF_zv3L-XJzVULhRO2cEHb_GqEhRFRmXSwr_diHk"> | <img style="width: 200px" src="https://media.licdn.com/dms/image/D4D35AQGq3GpJDW9fWg/profile-framedphoto-shrink_800_800/0/1696451800823?e=1703858400&v=beta&t=Y3Z1exTy4QT8SeriLrgrZVJjoKwWxXO60WT_230TIqA">| <img style="width: 200px" src="https://media.licdn.com/dms/image/D4D35AQHquf5f8bFsBw/profile-framedphoto-shrink_800_800/0/1691228949146?e=1703858400&v=beta&t=N2ShUibMakJPXEC_ly8Yl9lhr6I2v5P3JVgmAl0C3c4"> |
| :--------: | :-------: | :-------------------------: |
| [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/cintiaredondas/) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/juampypassa)| [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/maurifl/) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/maurifl) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/juan-pablo-passadore-denis-105349116) [![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/juampypassa)|
| **Cintia Redondas** | **Dante Fontana** | **Juan Pablo Passadore** |
