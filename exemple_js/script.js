const owner = "boukharSoufiane1998";
const repo = "Prototype-projet-task";

const checkPullRequest = async (pullRequestNumber) => {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/pulls/${pullRequestNumber}/files`);

    if (response.status === 200) {
      const files = await response.json();

      const matchingFiles = files.filter(file => {
        const filesCheck = ['middleware', 'providers', 'kernel.php', 'README.md'];
        return filesCheck.some(item => file.filename.startsWith(item));
      });

      return matchingFiles.map(file => file.filename);
    } else if (response.status === 404) {
      throw new Error(`La demande de pullrequest ${pullRequestNumber} n'a pas été trouvée.`);
    } else {
      throw new Error(`Échec de la récupération des fichiers de pullrequest. Statut : ${response.status}`);
    }
  } catch (error) {
    console.error("Erreur lors de la vérification des dossiers de pullrequest :", error);
    return false;
  }
};

const check = () => {
  const pullRequestNumber = 1;

  checkPullRequest(pullRequestNumber)
    .then(matchingFiles => {
      const resultMessage = document.getElementById('result-message');

      if (matchingFiles.length > 0) {
        resultMessage.textContent = `Les éléments suivants ont été trouvés dans le pullrequest ${pullRequestNumber} : ${matchingFiles.join(', ')}`;
      } else {
        resultMessage.textContent = `Aucun dossier spécifié trouvé dans le pullrequest ${pullRequestNumber}.`;
      }
    })
    .catch(error => {
      console.error("Erreur lors de la vérification des dossiers :", error);
    });
};
