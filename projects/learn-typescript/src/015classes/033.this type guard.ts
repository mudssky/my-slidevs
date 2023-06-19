class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep
  }
  isDirectory(): this is Directory {
    return this instanceof Directory
  }
  isNetworked(): this is Networked & this {
    return this.networked
  }
  constructor(public path: string, private networked: boolean) {
    this.path = path
    this.networked = networked
  }
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false)
  }
}

class Directory extends FileSystemObject {
  children: FileSystemObject[] = []
}

interface Networked {
  host: string
}

const fso: FileSystemObject = new FileRep('foo/bar.txt', 'foo')

if (fso.isFile()) {
  fso.content
  // console.log('isFile', fso.content)
} else if (fso.isDirectory()) {
  fso.children
  // console.log('isDirectory', fso.children)
} else if (fso.isNetworked()) {
  fso.host
  // console.log('isNetworked', fso.host)
}

export {}
