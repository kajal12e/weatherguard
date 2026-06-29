async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const port = process.env.PORT || 10000;
  await app.listen(port, '0.0.0.0');
  console.log(`App running on port ${port}`);
}
bootstrap();