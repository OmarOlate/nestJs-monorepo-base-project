import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import {
  VALIDATE_USER_EXISTS_SERVICE,
  ValidateUserExistsService,
} from './ports/validate-user-exists.port';
import {
  CREATE_PENDING_PASSWORD_SERVICE,
  CreatePendingPasswordService,
  DEACTIVATE_USER_FOR_PASSWORD_SERVICE,
  DeactivateUserForPasswordService,
  VALIDATE_PENDING_PASSWORD_SERVICE,
  ValidatePendingPasswordService,
} from './ports';
import { DeactivateUserForPasswordInputDto } from '../domain';
import {} from '@nest-js-monorepo-base-project/send-one-mail';
import { SendOneEmailUseCase } from 'libs/send-email/features/send-one-mail/src/lib/application';

@Injectable()
export class DeactivateUserForPasswordUseCase {
  constructor(
    @Inject(VALIDATE_USER_EXISTS_SERVICE)
    private readonly validateUserExists: ValidateUserExistsService,
    @Inject(VALIDATE_PENDING_PASSWORD_SERVICE)
    private readonly validatePendingPassword: ValidatePendingPasswordService,
    @Inject(DEACTIVATE_USER_FOR_PASSWORD_SERVICE)
    private readonly deactivateUserForPassword: DeactivateUserForPasswordService,
    @Inject(CREATE_PENDING_PASSWORD_SERVICE)
    private readonly createPendingPassword: CreatePendingPasswordService,
    private readonly sendOneEmail: SendOneEmailUseCase
  ) {}

  async execute(input: DeactivateUserForPasswordInputDto): Promise<void> {
    const usersResponse = await this.validateUserExists.execute(input);

    await this.validatePendingPassword.execute(input);

    const createPendingPassword = await this.createPendingPassword.execute(
      input
    );

    await this.deactivateUserForPassword.execute(input);

    await this.sendOneEmail.execute({
      to: usersResponse.email,
      priority: 'high',
      subject: `asCódigo de recuperación de contraseña`,
      html: `<p>Hola, ${usersResponse.name} ${usersResponse.fatherLastName} ${usersResponse.matherLastName}</p>
      <p>Tu clave temporal para recuperar la contraseña es:</p>
      <p style="text-align: center; color: #0baca9; font-size: 20px; font-weight: bold; user-select: all; cursor: pointer;"
      onclick="navigator.clipboard.writeText('${createPendingPassword.password}').then(() => alert('Código copiado al portapapeles'));">
     ${createPendingPassword.password}
   </p>      <!-- Call to Action -->
              <tr>
                <td style="text-align: center; padding: 30px;">
                  <a href="http://localhost:4200/auth/sign-in" style="background-color: #0baca9; color: white; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    Iniciar sesión en GesCamp360
                  </a>
                  <p style="margin-top: 12px; font-size: 13px; color: #6B7280;">Accede con tus credenciales para continuar</p>
                </td>
              </tr>
      <p>Usa esta clave para acceder y cambiar tu contraseña lo antes posible.</p>
      <p>Saludos,<br/>El equipo de Devom</p>`,
    });
  }
}
