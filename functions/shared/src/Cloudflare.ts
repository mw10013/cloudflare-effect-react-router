import { Config, Effect, Layer, Logger, LogLevel } from 'effect'
import * as ConfigEx from './ConfigEx'

export const provideLoggerAndConfig = <ROut, E, RIn, Env extends { [K in keyof Env]: string | object }>(
  self: Layer.Layer<ROut, E, RIn>, env: Env
) => {
  const ConfigLive = ConfigEx.fromObject(env)
  const LogLevelLive = Config.logLevel('LOG_LEVEL').pipe(
    Config.withDefault(LogLevel.Info),
    Effect.map((level) => Logger.minimumLogLevel(level)),
    Layer.unwrapEffect
  )
  return self.pipe(Layer.provide(Logger.structured), Layer.provide(LogLevelLive), Layer.provide(ConfigLive))
}

// export const provideLoggerAndConfig = <ROut, E, RIn>(self: Layer.Layer<ROut, E, RIn>) => {
//   const ConfigLive = ConfigEx.fromObject(env)
//   const LogLevelLive = Config.logLevel('LOG_LEVEL').pipe(
//     Config.withDefault(LogLevel.Info),
//     Effect.map((level) => Logger.minimumLogLevel(level)),
//     Layer.unwrapEffect
//   )
//   return self.pipe(Layer.provide(Logger.structured), Layer.provide(LogLevelLive), Layer.provide(ConfigLive))
// }

/*

export const fromObject = <T extends { [K in keyof T]: string | object }>(object: T) =>
  pipe(
    object as unknown as Record<string, string>,
    Record.toEntries,
    (tuples) => new Map(tuples),
    ConfigProvider.fromMap,
    Layer.setConfigProvider
  )

  */
