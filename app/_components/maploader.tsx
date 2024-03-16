import Script from 'next/script';

export default function YMapLoader() {
  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/3.0/?apikey=${process.env.NEXT_PUBLIC_YMAP_API_KEY}&lang=ru_RU`}
      />
    </>
  );
};
