export const getGithubUsername = (value: string) => {
  const res = value.split("https://github.com/");
  return res[1];
}

