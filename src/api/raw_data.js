export const tutorials = {
  php: [
    {
      title: "Hello PHP",
      description: "Basic introduction to PHP",
      href: "http://php.com",
      free: true
    }
  ],
  ruby: [
    {
      title: "Hello Ruby",
      description: "Basic introduction to Ruby",
      href: "http://ruby.com",
      free: false
    }
  ],
  html: [],
  javascript: [],
  docker: [],
  kubernetes: []
};

export const topicDetails = {
  php: {
    title: "PHP",
    category: "OOP",
    slug: "php",
    tutorialsCount: tutorials.php.length
  },
  ruby: {
    title: "Ruby",
    category: "OOP",
    slug: "ruby",
    tutorialsCount: tutorials.ruby.length
  },
  javascript: {
    title: "JavaScript",
    category: "Frontend",
    slug: "javascript",
    tutorialsCount: tutorials.javascript.length
  },
  html: {
    title: "HTML",
    category: "Frontend",
    slug: "html",
    tutorialsCount: tutorials.html.length
  },
  docker: {
    title: "Docker",
    category: "DevOps",
    slug: "docker",
    tutorialsCount: tutorials.docker.length
  },
  kubernetes: {
    title: "Kubernetes",
    category: "DevOps",
    slug: "kubernetes",
    tutorialsCount: tutorials.kubernetes.length
  }
};

export const topics = [
  {
    title: "PHP",
    category: "OOP",
    slug: "php",
    tutorialsCount: tutorials.php.length
  },
  {
    title: "Ruby",
    category: "OOP",
    slug: "ruby",
    tutorialsCount: tutorials.ruby.length
  },
  {
    title: "JavaScript",
    category: "Frontend",
    slug: "javascript",
    tutorialsCount: tutorials.javascript.length
  },
  {
    title: "HTML",
    category: "Frontend",
    slug: "html",
    tutorialsCount: tutorials.html.length
  },
  {
    title: "Docker",
    category: "DevOps",
    slug: "docker",
    tutorialsCount: tutorials.docker.length
  },
  {
    title: "Kubernetes",
    category: "DevOps",
    slug: "kubernetes",
    tutorialsCount: tutorials.kubernetes.length
  }
];
