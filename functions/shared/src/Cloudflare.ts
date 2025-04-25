import { Config, Effect, Layer, Logger, LogLevel } from 'effect'
import { dual } from 'effect/Function'
import * as ConfigEx from './ConfigEx'

export const provideLoggerAndConfig: {
  <ROut, E, RIn, Env extends { [K in keyof Env]: string | object }>(
    env: Env
  ): (self: Layer.Layer<ROut, E, RIn>) => Layer.Layer<ROut, E, RIn>
  <ROut, E, RIn, Env extends { [K in keyof Env]: string | object }>(self: Layer.Layer<ROut, E, RIn>, env: Env): Layer.Layer<ROut, E, RIn>
} = dual(2, <ROut, E, RIn, Env extends { [K in keyof Env]: string | object }>(self: Layer.Layer<ROut, E, RIn>, env: Env) => {
  const ConfigLive = ConfigEx.fromObject(env)
  const LogLevelLive = Config.logLevel('LOG_LEVEL').pipe(
    Config.withDefault(LogLevel.Info),
    Effect.map((level) => Logger.minimumLogLevel(level)),
    Layer.unwrapEffect
  )
  return self.pipe(Layer.provide(Logger.structured), Layer.provide(LogLevelLive), Layer.provide(ConfigLive))
})
