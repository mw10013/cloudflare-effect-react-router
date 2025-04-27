import { Config, Effect, Layer, Logger, LogLevel } from 'effect'
import { dual } from 'effect/Function'
import * as ConfigEx from './ConfigEx'

/**
 * Provides standard logging and configuration layers derived from an environment object.
 */
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
  return Layer.provide(self, Layer.mergeAll(Logger.structured, LogLevelLive, ConfigLive))
})
