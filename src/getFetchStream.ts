import fetch from 'node-fetch'

export const getFetchStream = async (url: string) => {
  try {
    const res = await fetch(url)
    return res.body
  } catch (err) {
    console.error(err)
    throw ('Error getting stream')
  }
}
