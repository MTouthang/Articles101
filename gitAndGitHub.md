### Git with GitHub   
___
![git with GitHub](./assets/git_and_github_logo.png )    
___

#### What is Git ?
- Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively source code during software development.
- Git is also a free and open source distributed version control system that's responsible for everything GitHub related that happens locally on your computer. 
- Its goals include speed, data integrity, and support for distributed, non-linear workflows.
- Gits was originally authored by Linus Torvalds in 2005 for the development of the Linux kernel, with other kernel developers contributing to its initial development.

#### What is GitHub ?
- GitHub is a provider of Internet hosting for software development and version control using Git.
- It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features.
- It provides access control and several collaboration features such as bug tracking, feature requests, task management, continuous integration and wikis for every project.
- It is commonly used to host open-source projects.

#### Why Git ?
- Feature Branch Workflow - One of the biggest advantages of Gits is its branching capabilities. Unlike centralized version control systems, Git branches are cheap and easy to merge. This facilitates the feature branch workflow popular with many Git users.
- Distributed Development - In Subversion (SVN), each developer gets a working copy that points back to a single central repository. Git, however, is a distributed version control system. Instead of the working copy, each developer gets their own local repository, complete with a full history of commits.
- Pull Requests - A pull request is a way to ask another developer to merge one of the branches into the main repository.
- Community- Git is very popular among open source projects. This means it's easy to leverage 3rd party libraries and encourage others to fork your own open source code.
- Faster Release Cycle - The ultimate result of feature branches, distributed development, pull requests, and a stable community is a faster release cycle. 

    *Additionally git can be used for marketing, product management, designers, customer support, human resources, or anyone managing a budget.*        

---
#### Installation and GUIS    
![git for all platforms](https://img.shields.io/badge/Git-Git%20for%20All%20Platforms-orange)    
git is a must to be installed in the local machine in order to incorporate with git command.
[git for all the platforms](https://git-scm.com/)

![gitHub GUI](https://img.shields.io/badge/GitHub-GitHub%20GUI-lightgrey)   
GitHub GUI is optional, GitHub GUI or GitHub website can be used in order to incorporate with GitHub.    
[github GUI for window](https://central.github.com/deployments/desktop/desktop/latest/win32 "download GitHub desktop")   
[github GUI for macs](https://central.github.com/deployments/desktop/desktop/latest/darwin "download GitHub for mac")      

*For windows users - Git bash command line should be used instead of the windows command line for better performance*

----
#### Some useful commands
- >`git --version`   
    to check the version of the git installed.   
- >`ls -la `  
    to view all the files including all the hidden files in a folder.
- >`git help`  
    to explore more about git.
- > `git log --graph --oneline --decorate --all 
  draw a text base graphical representation of the commit history on the left hand of the output.

#### Setup and configuration for the first time
- Git comes with a tool called git config that lets us get and set configuration variables that control all aspects of how Git looks and operates.
  > `git config`  
    to explore more about `git config` 
 
  > `git config --list`  
    show a list of all the configuration  or setting details
- Identity config
  > `git config --global user.name "your username"`   
     set up your name 
  
  > `git config --global user.email "your email"`  
     set up your email
  
- Editor config
  > `git config --global core.editor "editorName"`   
    set up your favourite code editor as the default

- Default branch name
  > `git config --global init.defaultBranch "branchName"`  
  set your desired branch name as the default

- Checking setting   
  Specific settings can be checked by passing specific key values after `git config` as Git uses the last value for each unique key it sees. i.e `git config <key>`
  > `git config user.name`  
  return the configured user name    

- Color config  
  > `git config --global color.ui auto`  
    set automatic Commandline colouring for easy reviewing. Colours with the following value can be set-  Normal, black, red, green, blue, magenta, yellow, cyan, or white and more attribute like bold dim, ul(underline), blink and reverse can be set.
----
#### Initialization Repositories  
The configured user can initialize and clone repositories with the following command.

- > `git init`   
  Initialize the existing directory or project as a Git repository and a `.git` file is added to it where all the work related to git is stored.

- > `git clone [url]`   
  Clone or make a copy of the entire repository from a hosted location via URL.

----
#### Stage & Snapshot
- To stage is simply to prepare it finely for a commit to the working repository
- Similarly, Snapshots are the changes made while developing something and for which git commits have to be made.
- Working with snapshots and Git Staging area -
- `git status` -show all the modified files in the working directory, staged for the next commit
     
  
- `git add .` - add all the modified files as it looks forward to the next commit(stage)     
- `git add [file]` add a particular file.   
- `git reset HEAD [file]` or `git rm -cached [file]` - un-stage a file while retaining the changes in the working directory. 
- `git diff` - log all the modified items of a file but not yet stage
- `git diff -staged` - log all the items of a file which are stage but yet to be committed.
- `git commit -m "[descriptive commit message]" - commit a particular staged content as a new commit snapshot.
___
#### Branch and Merge
- Branching and Merging of branches are on of the key features of git which allow a project to be developed by a team where collaboration can happen also enabling the trying of different features of the software.
- `git branch` - list all the available branches of the particular repository or project.
- `git branch [branch-name]` - create a new branch to the current commit.
- `git checkout [branch-name]` - switch to another branch and checkout to the working directory.
- `git merge [branch-name]` - merge the specified branch history to the current one.

---
#### logs and compare
- Inspecting logs, diffs and object information
- `git log` - shows the commit history of the currently active branch.
- `git log branchB..branchA` - show all the commits of branchA that are not on branchB.
- `git log --follow [filename]` - show the commits that changed file, even across renames.
- `git show [SHA]` - show any object in Git in human-readable format.
____

#### Share and update 
- Retrieving updates from another remotely hosted repository and updating local repository mainly from GitHub.
- `git remote add [alias] [url]` - add a git URL as an alias 
- `git push [alias] [url]` - transfer local branch commit to the remote repository branch.

#### Tracking path changes 
- Versioning file removes and path changes
- `git rm [file]` - delete the file from the project and stage removal commit.
- `git mv [existing path] [new path]` - Change the existing file path and stage move.
- `git log --stat -M` - shows all commit logs indicating any paths that moved. 
- `git fetch [alias]` - fetch down all the branches from that git remote.  
- `git merge [alias]/[branch]` - merge a remote branch into your current branch to bring it up to date.
- `git pull` - fetch and merge any commits to the tracking remote branch. 

----
#### Rewrite History
- Rewriting branches, updating commits and clearing history
- `git rebase [branch]` - apply any commits of the current branch ahead of the specified one.
- `git reset --hard [commit]` - clear staging area, rewrite working tree from specified commit. 

----

#### Temporary Commits
- Temporary storage modified tracked files in order to change branches.
- `git stash` - Save modified and staged changes
- `git stash list` - list stack-order of stashed file changes
- `git stash pop` - write working from the top of the stash stack
- `git stash drop` - discard the changes from the top of the stash stack

----

#### .gitignore file
- The `.gitignore file is a text file that tells Git which files to ignore or folders to ignore in a project.
- A local `.gitignore file` file is usually placed in the root directory of a project.
- Any entries of the file name in the `.gitignore file will be ignored in all your Git repositories.
- The entries in the `.gitignore file can also follow a matching pattern. 
    - ` * ` is used as a wildcard match
    - ` / ` is used to ignore pathnames relative to the .gitignore file.
    - `#` is used to add comments to a .gitinore file.

#### Tags
- Tagging in Git or any other vcs refers to creating specific points in history for your repository/data
- This is usually done to mark release points.
- To Mark release points for your code/data
- To create historic restoration points
- `git tag [tagName]` - to create a tag
- `git tag` - to see the tag created which is also known as a lightweight tag.
- `git tag -a [tagName] -m "[annotated text]"` creating an annotated tag, some name can be given and also contain all the information.
- `git show [tagName]` - to show the details of the particular tag
- `git ta -l "v1.*"` - show all the tags starting with their name "v1." which is kind of like a wild card.
- `git push origin [tagName]` - to push tag to a remote repository
- `git push origin --tags` or `git push --tags` - to push all the tags at once
- `git tag -d [tagName]` or `git tag --delete [tagName]` - to delete tags from local
- `git push origin -d [tagName]` or `git push origin --delete [tagName]` or `git push origin :[tagName]` to delete tags from remote.
- `git tag -d [tagName] [tagName1]` - to delete multiple tags from the local
- `git push origin -d [tagName] [tagName1]` - to  delete multiple tags from the  remote.
- `git tag [tagName] [reference of commit]` - create a tag from some past commit with the tag name and the commit SHA value.

____

#### Reference and further reading
- [Check out the original documentation of Git](https://git-scm.com/doc: "git scm doc")
- [Check out the original documentation of GitHub](https://docs.github.com/en: "gitHub doc")
- [git working visualization](https://ndpsoftware.com/git-cheatsheet.html#loc=remote_repo; "An interaction from NDP sotware")