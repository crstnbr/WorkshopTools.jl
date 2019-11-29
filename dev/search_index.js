var documenterSearchIndex = {"docs":
[{"location":"functions/#Functions-1","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"functions/#Index-1","page":"Functions","title":"Index","text":"","category":"section"},{"location":"functions/#","page":"Functions","title":"Functions","text":"","category":"page"},{"location":"functions/#List-of-Functions-1","page":"Functions","title":"List of Functions","text":"","category":"section"},{"location":"functions/#","page":"Functions","title":"Functions","text":"CurrentModule = WorkshopWizard","category":"page"},{"location":"functions/#","page":"Functions","title":"Functions","text":"run_wizard\ninstall_IJulia\nuninstall_IJulia\ndownload\ninstall_dependencies\ninstall","category":"page"},{"location":"functions/#WorkshopWizard.run_wizard","page":"Functions","title":"WorkshopWizard.run_wizard","text":"run_wizard()\n\nStart the workshop installation wizard. It will interactively guide you through the selection, download, and installation of a Julia workshop.\n\nIf not already present, the wizard will also install IJulia.\n\n\n\n\n\n","category":"function"},{"location":"functions/#WorkshopWizard.install_IJulia","page":"Functions","title":"WorkshopWizard.install_IJulia","text":"install_IJulia(; python = nothing)\n\nInstall IJulia to the to the global v#.# environment, or to the environment that has been given to --project when Julia was started.\n\nIJulia should automatically install python and jupyter if necessary. The keyword python can be used to manually point to a python executable (to give it a hint).\n\n\n\n\n\n","category":"function"},{"location":"functions/#WorkshopWizard.uninstall_IJulia","page":"Functions","title":"WorkshopWizard.uninstall_IJulia","text":"uninstall_IJulia()\n\nRemove IJulia from the global environment.\n\n\n\n\n\n","category":"function"},{"location":"functions/#WorkshopWizard.download","page":"Functions","title":"WorkshopWizard.download","text":"download(; repo = default_repo(), path = default_path())\n\nDownload a workshop from github.\n\nKeyword arguments repo and path can be used to specify the github repository and the local installation directory.\n\n\n\n\n\n","category":"function"},{"location":"functions/#WorkshopWizard.install_dependencies","page":"Functions","title":"WorkshopWizard.install_dependencies","text":"install_dependencies(workshop_path)\n\nInstantiates and precompiles the workshops Julia environment (Manifest.toml). Depending on the workshop and your machine this may take a while (even >15 minutes).\n\n\n\n\n\n","category":"function"},{"location":"functions/#WorkshopWizard.install","page":"Functions","title":"WorkshopWizard.install","text":"install(; repo = default_repo(), path = default_path(), check_IJulia = true, auto_overwrite = true)\n\nMore programmatic workshop installation interface.\n\nBy default, the workshop will be downloaded to the desktop (on windows) or the home directory (on linux/macOS). The installation path can be adjusted per keyword argument path = desired/install/path.\n\n\n\n\n\n","category":"function"},{"location":"usage/#Usage-1","page":"Usage","title":"Usage","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"In this section we describe how to use the WorkshopWizard.","category":"page"},{"location":"usage/#Getting-the-latest-workshop-1","page":"Usage","title":"Getting the latest workshop","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"To quickly get the latest workshop, install the wizard","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"] add https://github.com/crstnbr/WorkshopWizard.jl","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"and start the magic","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"using WorkshopWizard\nWorkshopWizard.run_wizard()","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"That's it! You can now start the Jupyter notebook server and dive into the workshop materials:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"using IJulia\nnotebook()","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"The default download path is the desktop, on windows, or the home directory, on linux/macOS.","category":"page"},{"location":"usage/#Demonstration-1","page":"Usage","title":"Demonstration","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"(Image: wizard demo)","category":"page"},{"location":"usage/#Unattended-installation-1","page":"Usage","title":"Unattended installation","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"If you want to install the latest workshop without interactivity you can use WorkshopWizard.install():","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"using Pkg;\npkg\" add https://github.com/crstnbr/WorkshopWizard.jl/\"","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"using WorkshopWizard\nWorkshopWizard.install();","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"a = 1\nb = 2\na + b\n\n# output\n\n3","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"isdir(joinpath(homedir(), WorkshopWizard.default_workshop()))\n\n# output\n\ntrue","category":"page"},{"location":"troubleshooting/#Troubleshooting-1","page":"Troubleshooting","title":"Troubleshooting","text":"","category":"section"},{"location":"troubleshooting/#IJulia/Jupyter-installation-1","page":"Troubleshooting","title":"IJulia/Jupyter installation","text":"","category":"section"},{"location":"troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"This is the part of the installation that is most likely to fail since IJulia depends on Jupyter and therefore Python.","category":"page"},{"location":"troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"Generally, the IJulia installation strategy is to check if there is a system-wide python available. If yes, it tries to install jupyter there. If not, it installs a boxed mini python (through Conda.jl).","category":"page"},{"location":"troubleshooting/#IJulia-can't-find-my-global-python-1","page":"Troubleshooting","title":"IJulia can't find my global python","text":"","category":"section"},{"location":"troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"In this case, fire up Julia and enter","category":"page"},{"location":"troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"ENV[\"PYTHON\"] = \"path/to/python\"","category":"page"},{"location":"troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"where path/to/python is the path to you python installation. Note that the path should include the executable as well! Hence, on windows, it is path/to/python.exe and not just path/to/.","category":"page"},{"location":"troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"Afterwards, rebuild IJulia (or ] add IJulia if you haven't tried to install it)","category":"page"},{"location":"troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"using Pkg\nPkg.build(\"IJulia\")","category":"page"},{"location":"troubleshooting/#IJulia-fails-to-install-a-mini-python-1","page":"Troubleshooting","title":"IJulia fails to install a mini python","text":"","category":"section"},{"location":"troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"In this case I recommend to install a global python separately and then use the steps explained above (IJulia can't find my global python).","category":"page"},{"location":"troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"On linux, you should use your package manager to install python and jupyter.","category":"page"},{"location":"troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"On windows, you can install Anaconda.","category":"page"},{"location":"troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"For more information check out the Jupyter documentation.","category":"page"},{"location":"#Package-1","page":"Introduction","title":"Package","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"The Workshop Wizard is a magical little helper who will download and install one of my Julia workshops (like this one) for you.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Specifically, the wizard does the following:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Download the workshop materials\nInstantiate and precompile the workshop environment\nAdd IJulia to the global environment (opt-out possible)","category":"page"},{"location":"#Contents-1","page":"Introduction","title":"Contents","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"Pages = [\"usage.md\",\n    \"troubleshooting.md\",\n    \"functions.md\",\n    ]","category":"page"}]
}
