import { useState, useEffect } from 'react';

export default function RepoList({ username }) {
    const [repoList, setRepoList] = useState (null);

    useEffect (() => {
        fetch(`https://api.github.com/users/${username}/repos?sort=created`)
            .then((response) => {
                const apiData = response.json();
                return apiData;
            }).then((apiData) => setRepoList(apiData))
            .catch((error) => console.log(error));
    }, [username]);
    //https://api.github.com/users/olavomtveit/repos?sort=created

    if (repoList) {
        return (
            <ul>
                {repoList.map((repo) => {
                    return (
                        <li>
                    <a href="/">
                    Some link <i>ICON</i>
                    </a>
                </li>
                    );
                })}
            </ul>
        );
    }
   return "No Data Sorry";
}