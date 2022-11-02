const getData = async (): Promise<any> => {
  const data = (
    await fetch('https://www.boredapi.com/api/activity', { cache: 'no-store' })
  ).json();
  return data;
};

export default async function fetchPage() {
  const data = await getData();

  return (
    <div>
      <h1 className="text-4xl">Fetch Test</h1>
      <span>Data: {data?.activity}</span>
    </div>
  );
}
