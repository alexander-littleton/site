export enum DeviconItem {
  typeScript = "devicon-typescript-plain",
  jQuery = "devicon-jquery-plain-wordmark",
  python = "devicon-python-plain-wordmark",
  javaScript = "devicon-javascript-plain",
  react = "devicon-react-original-wordmark",
  graphQL = "devicon-graphql-plain-wordmark",
  postGreSQL = "devicon-postgresql-plain-wordmark",
  git = "devicon-git-plain-wordmark",
}

export interface DeviconProps {
  type: DeviconItem;
}
