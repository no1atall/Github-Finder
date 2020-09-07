class Github {
  constructor() {
    this.config = {
      headers: {
        Authorization: "token d32a2e76a1052cc392cc5a847e6709892d5f3861",
      },
    };
    this.repos_count = 5;
    this.report_sort = "created asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
