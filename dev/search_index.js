var documenterSearchIndex = {"docs":
[{"location":"#Introduction-1","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"WorkshopWizard.jl is awesome.","category":"page"},{"location":"#Contents-1","page":"Introduction","title":"Contents","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"","category":"page"},{"location":"#Functions-1","page":"Introduction","title":"Functions","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"CurrentModule = WorkshopWizard","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"run_wizard()\ncheck_IJulia()\ninstall_IJulia()\ndownload()\ninstall()\ndefault_path()\ndefault_repo()\ndefault_workshop()","category":"page"},{"location":"#WorkshopWizard.run_wizard-Tuple{}","page":"Introduction","title":"WorkshopWizard.run_wizard","text":"run_wizard()\n\nStart the workshop installation wizard. It will interactively guide you through the selection, download, and installation of a Julia workshop.\n\nIf not already present, the wizard will also install IJulia.\n\n\n\n\n\n","category":"method"},{"location":"#WorkshopWizard.check_IJulia-Tuple{}","page":"Introduction","title":"WorkshopWizard.check_IJulia","text":"Check if IJulia is available.\n\n\n\n\n\n","category":"method"},{"location":"#WorkshopWizard.install_IJulia-Tuple{}","page":"Introduction","title":"WorkshopWizard.install_IJulia","text":"install_IJulia(; python = nothing, globally = true)\n\nInstall the IJulia kernel for jupyter.\n\nAlthough the installer should locate your local python installation automatically (if present), the keyword python can be used to manually point to a python executable.\n\nWhen globally = true IJulia will be installed to the global v#.# environment, or to the environment that has been given to --project when Julia was started.\n\n\n\n\n\n","category":"method"},{"location":"#WorkshopWizard.download-Tuple{}","page":"Introduction","title":"WorkshopWizard.download","text":"download(; repo = default_repo(), path = default_path())\n\nDownload a workshop from github.\n\nKeyword arguments repo and path can be used to specify the github repository and the local installation directory.\n\n\n\n\n\n","category":"method"},{"location":"#WorkshopWizard.install-Tuple{}","page":"Introduction","title":"WorkshopWizard.install","text":"install(; repo = default_repo(), path = default_path(), check_IJulia = true)\n\nDownload the Julia workshop and install all dependencies.\n\nBy default, the workshop will be downloaded to the desktop (on windows) or the home directory (on linux/macOS). Alternatively, the installation path can be specified per keyword argument path=desired/install/path.\n\n\n\n\n\n","category":"method"},{"location":"#Index-1","page":"Introduction","title":"Index","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"","category":"page"}]
}
