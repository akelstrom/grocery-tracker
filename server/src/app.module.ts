import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client', 'public'),
    }),
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: [''] }),
    UsersModule, //this will make the .env properties avaliable to rest of application
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
