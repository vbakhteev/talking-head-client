import useLocalStorage from "./useLocalStorage"

export const useSaluteAccessKey = (key: string) => {
  const [accessKey, setAccessKey] = useLocalStorage(key, { accessKey: "", deadline: Date.now() })

  return () => {
    if (accessKey.deadline <= Date.now()) {
      fetch(`${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}/api/v2/oauth`, {
        headers: {
          Authorization: `Basic ${process.env.NEXT_PUBLIC_API_KEY}`,
          RqUID: "6f0b1291-c7f3-43c6-bb2e-9f3efb2dc98e",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        body: "scope=SALUTE_SPEECH_PERS"
      }).then(res => res.json().then(data => {
        console.log(data)
        setAccessKey({
          accessKey: data.access_token,
          deadline: data.expires_at
        })
        return accessKey
      }).catch(console.error)).catch(console.error)

    } else {
      return accessKey.accessKey;

    }
  }
}

export const useGigaChatAccessKey = (key: string) => {
  const [accessKey, setAccessKey] = useLocalStorage(key, { accessKey: "", deadline: Date.now() })

  return () => {
    if (accessKey.deadline <= Date.now()) {
      fetch(`${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}/api/v2/oauth`, {
        headers: {
          Authorization: `Basic ${process.env.NEXT_PUBLIC_GIGA_KEY}`,
          RqUID: "6f0b1291-c7f3-43c6-bb2e-9f3efb2dc98e",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        body: encodeURI("scope=GIGACHAT_API_PERS")
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setAccessKey({
            accessKey: data.access_token,
            deadline: data.expires_at
          })
          return accessKey
        }).catch(console.error).catch(console.error)

    } else {
      return accessKey.accessKey;
    }
  }
}
