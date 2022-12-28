import * as core from '@actions/core'
import * as exec from '@actions/exec'

export async function run(): Promise<{environment?: string}> {
  try {
    const environment: string = core.getInput('environment', {required: true})
    await exec.exec('nucleus', ['deploy', '-env', environment])
    return {environment}
  } catch (error) {
    const errMsg =
      error instanceof Error
        ? error.message
        : 'Failed to deploy using Nucleus CLI'
    core.setFailed(errMsg)
    throw error
  }
}

run()
