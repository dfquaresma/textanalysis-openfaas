# textanalysis-openfaas
OpenFaaS function for text analysis experiments.

### Usage
To run the function locally you have to make sure OpenFaaS is up and running. Read the official documentation for more help. https://docs.openfaas.com/

Clone the repository:
```bash
$ git clone https://github.com/dfquaresma/textanalysis-openfaas
```

#### Build & Deploy
```bash 
$ faas-cli up -f textanalysis-gci.yml
```
or
```bash 
$ faas-cli up -f textanalysis-nogci.yml
```

### Result
After deploying the OpenFaaS function `textanalysis` will show up in the function list. You just have to hit invoke to run it. At each call, this will return the function's service time in nanoseconds.
