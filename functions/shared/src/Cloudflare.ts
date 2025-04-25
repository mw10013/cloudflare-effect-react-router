import { Config, Effect, Layer, Logger, LogLevel } from 'effect'
import { dual } from 'effect/Function'
import * as ConfigEx from './ConfigEx'

export const provideLoggerAndConfig: {
  <ROut, E, RIn>(env: Record<string, string | object>): (self: Layer.Layer<ROut, E, RIn>) => Layer.Layer<ROut, E, RIn>
  <ROut, E, RIn>(self: Layer.Layer<ROut, E, RIn>, env: Record<string, string | object>): Layer.Layer<ROut, E, RIn>
} = dual(2, <ROut, E, RIn>(self: Layer.Layer<ROut, E, RIn>, env: Record<string, string | object>) => {
  const ConfigLive = ConfigEx.fromObject(env)
  const LogLevelLive = Config.logLevel('LOG_LEVEL').pipe(
    Config.withDefault(LogLevel.Info),
    Effect.map((level) => Logger.minimumLogLevel(level)),
    Layer.unwrapEffect
  )
  return Layer.provide(self, Layer.mergeAll(Logger.structured, LogLevelLive, ConfigLive))
})
