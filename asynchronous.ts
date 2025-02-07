function getNama(nama: string): Promise<string> {
  return new Promise((s, f) => {
    if (!nama) f("Nama harus diisi")
    setTimeout(() => {
      s(nama)
    }, 500)
  })
}

function getUmur(nama: string): Promise<number> {
  return new Promise((s, f) => {
    if (!nama) f("Nama harus diisi")
    setTimeout(() => {
      s(20)
    }, 1000)
  })
}

function getJenisKelamin(nama: string, umur: number): Promise<string> {
  return new Promise((s, f) => {
    if (!nama && !umur) f("Nama harus diisi")
    setTimeout(() => {
      s("Laki-Laki")
    }, 500)
  })
}

async function getData() {
  try {
    const nama = await getNama("Rendi")
    const umur = await getUmur(nama)
    const jenisKelamin = await getJenisKelamin(nama, umur)
    console.log(`Nama: ${nama}`)
    console.log(`Umur: ${umur}`)
    console.log(`Jenis Kelamin: ${jenisKelamin}`)
  } catch (e) {
    console.log(e)
  }
}

getData()
