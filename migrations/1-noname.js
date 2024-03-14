'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Ekstrakulikullers", deps: []
 * createTable "Kelas", deps: []
 * createTable "MataPelajarans", deps: []
 * createTable "Rangkings", deps: []
 * createTable "Tahuns", deps: []
 * createTable "Users", deps: []
 * createTable "Gurus", deps: [Users]
 * createTable "Siswas", deps: [Users]
 * createTable "kelompok_matpel_gurus", deps: [MataPelajarans, Gurus, Kelas, Tahuns]
 * createTable "kelompok_wali_kelas", deps: [Gurus, Tahuns, Kelas]
 * createTable "kelompok_kelas", deps: [Kelas, Siswas, Tahuns]
 * createTable "NilaiAbsens", deps: [Tahuns, Siswas, Kelas]
 * createTable "NilaiEktrakulikulers", deps: [Tahuns, Siswas, Ekstrakulikullers, Kelas]
 * createTable "NilaiKeterampilans", deps: [Gurus, MataPelajarans, Siswas, Tahuns, Kelas]
 * createTable "NilaiPengetahuans", deps: [Gurus, MataPelajarans, Siswas, Tahuns, Kelas]
 * createTable "NilaiSikaps", deps: [Siswas, Tahuns, Kelas]
 * createTable "Prestasis", deps: [Siswas, Tahuns, Kelas]
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2023-08-08T08:29:38.557Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
            fn: "createTable",
            params: [
                "Ekstrakulikullers",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "nama": {
                        "type": Sequelize.STRING,
                        "field": "nama"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Kelas",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "tingkat": {
                        "type": Sequelize.STRING,
                        "field": "tingkat"
                    },
                    "nama": {
                        "type": Sequelize.STRING,
                        "field": "nama"
                    },
                    "kouta": {
                        "type": Sequelize.INTEGER,
                        "field": "kouta"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "MataPelajarans",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "kelompok": {
                        "type": Sequelize.STRING,
                        "field": "kelompok"
                    },
                    "kode": {
                        "type": Sequelize.STRING,
                        "field": "kode"
                    },
                    "nama": {
                        "type": Sequelize.STRING,
                        "field": "nama"
                    },
                    "nilaikkm": {
                        "type": Sequelize.INTEGER,
                        "field": "nilaikkm"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Rangkings",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "SiswaId": {
                        "type": Sequelize.INTEGER,
                        "field": "SiswaId"
                    },
                    "TahunId": {
                        "type": Sequelize.INTEGER,
                        "field": "TahunId"
                    },
                    "GuruId": {
                        "type": Sequelize.INTEGER,
                        "field": "GuruId"
                    },
                    "totalNilai": {
                        "type": Sequelize.DECIMAL,
                        "field": "totalNilai"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Tahuns",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "tahun": {
                        "type": Sequelize.STRING,
                        "field": "tahun"
                    },
                    "kepala_sekolah": {
                        "type": Sequelize.STRING,
                        "field": "kepala_sekolah"
                    },
                    "nip": {
                        "type": Sequelize.STRING,
                        "field": "nip"
                    },
                    "tgl_raport": {
                        "type": Sequelize.DATE,
                        "field": "tgl_raport"
                    },
                    "semester": {
                        "type": Sequelize.STRING,
                        "field": "semester"
                    },
                    "status": {
                        "type": Sequelize.STRING,
                        "field": "status"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Users",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "username": {
                        "type": Sequelize.STRING,
                        "field": "username"
                    },
                    "password": {
                        "type": Sequelize.STRING,
                        "field": "password"
                    },
                    "role": {
                        "type": Sequelize.STRING,
                        "field": "role"
                    },
                    "status": {
                        "type": Sequelize.STRING,
                        "field": "status"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Gurus",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "nip": {
                        "type": Sequelize.STRING,
                        "field": "nip"
                    },
                    "nama": {
                        "type": Sequelize.STRING,
                        "field": "nama"
                    },
                    "jk": {
                        "type": Sequelize.STRING,
                        "field": "jk"
                    },
                    "status": {
                        "type": Sequelize.STRING,
                        "field": "status"
                    },
                    "pendidikan_terakhir": {
                        "type": Sequelize.STRING,
                        "field": "pendidikan_terakhir"
                    },
                    "no_telpon": {
                        "type": Sequelize.STRING,
                        "field": "no_telpon"
                    },
                    "UserId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "CASCADE",
                        "references": {
                            "model": "Users",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "UserId"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Siswas",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "nis": {
                        "type": Sequelize.BIGINT,
                        "field": "nis"
                    },
                    "nama": {
                        "type": Sequelize.STRING,
                        "field": "nama"
                    },
                    "nisn": {
                        "type": Sequelize.BIGINT,
                        "field": "nisn"
                    },
                    "jk": {
                        "type": Sequelize.STRING,
                        "field": "jk"
                    },
                    "tgl_lahir": {
                        "type": Sequelize.DATE,
                        "field": "tgl_lahir"
                    },
                    "tmpt_lahir": {
                        "type": Sequelize.STRING,
                        "field": "tmpt_lahir"
                    },
                    "agama": {
                        "type": Sequelize.STRING,
                        "field": "agama"
                    },
                    "status": {
                        "type": Sequelize.STRING,
                        "field": "status"
                    },
                    "anak_ke": {
                        "type": Sequelize.STRING,
                        "field": "anak_ke"
                    },
                    "alamat": {
                        "type": Sequelize.STRING,
                        "field": "alamat"
                    },
                    "no_telp": {
                        "type": Sequelize.BIGINT,
                        "field": "no_telp"
                    },
                    "asal_sekolah": {
                        "type": Sequelize.STRING,
                        "field": "asal_sekolah"
                    },
                    "diterima_kelas": {
                        "type": Sequelize.STRING,
                        "field": "diterima_kelas"
                    },
                    "di_terima_semester": {
                        "type": Sequelize.STRING,
                        "field": "di_terima_semester"
                    },
                    "ortu_ayah": {
                        "type": Sequelize.STRING,
                        "field": "ortu_ayah"
                    },
                    "ortu_ibu": {
                        "type": Sequelize.STRING,
                        "field": "ortu_ibu"
                    },
                    "alamat_ortu": {
                        "type": Sequelize.STRING,
                        "field": "alamat_ortu"
                    },
                    "no_ortu": {
                        "type": Sequelize.STRING,
                        "field": "no_ortu"
                    },
                    "pkj_ortu_ayah": {
                        "type": Sequelize.STRING,
                        "field": "pkj_ortu_ayah"
                    },
                    "pkj_ortu_bu": {
                        "type": Sequelize.STRING,
                        "field": "pkj_ortu_bu"
                    },
                    "wali": {
                        "type": Sequelize.STRING,
                        "field": "wali"
                    },
                    "alamat_wali": {
                        "type": Sequelize.STRING,
                        "field": "alamat_wali"
                    },
                    "no_wali": {
                        "type": Sequelize.STRING,
                        "field": "no_wali"
                    },
                    "pkj_wali": {
                        "type": Sequelize.STRING,
                        "field": "pkj_wali"
                    },
                    "foto": {
                        "type": Sequelize.STRING,
                        "field": "foto"
                    },
                    "UserId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "CASCADE",
                        "references": {
                            "model": "Users",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "UserId"
                    },
                    "isHaveKelas": {
                        "type": Sequelize.STRING,
                        "field": "isHaveKelas"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "kelompok_matpel_gurus",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "MatpelId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "MataPelajarans",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "MatpelId"
                    },
                    "GuruId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Gurus",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "GuruId"
                    },
                    "KelasId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Kelas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "KelasId"
                    },
                    "TahunId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Tahuns",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "TahunId"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "kelompok_wali_kelas",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "GuruId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Gurus",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "GuruId"
                    },
                    "TahunId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Tahuns",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "TahunId"
                    },
                    "KelasId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Kelas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "KelasId"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "kelompok_kelas",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "KelasId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Kelas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "KelasId"
                    },
                    "SiswaId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Siswas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "SiswaId"
                    },
                    "TahunId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Tahuns",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "TahunId"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "NilaiAbsens",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "TahunId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Tahuns",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "TahunId"
                    },
                    "SiswaId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Siswas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "SiswaId"
                    },
                    "KelasId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Kelas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "KelasId"
                    },
                    "s": {
                        "type": Sequelize.INTEGER,
                        "field": "s"
                    },
                    "a": {
                        "type": Sequelize.INTEGER,
                        "field": "a"
                    },
                    "i": {
                        "type": Sequelize.INTEGER,
                        "field": "i"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "NilaiEktrakulikulers",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "TahunId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Tahuns",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "TahunId"
                    },
                    "SiswaId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Siswas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "SiswaId"
                    },
                    "EkstraId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Ekstrakulikullers",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "EkstraId"
                    },
                    "KelasId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Kelas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "KelasId"
                    },
                    "nilai": {
                        "type": Sequelize.STRING,
                        "field": "nilai"
                    },
                    "desk": {
                        "type": Sequelize.STRING,
                        "field": "desk"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "NilaiKeterampilans",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "GuruId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Gurus",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "GuruId"
                    },
                    "MatpelId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "MataPelajarans",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "MatpelId"
                    },
                    "SiswaId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Siswas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "SiswaId"
                    },
                    "TahunId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Tahuns",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "TahunId"
                    },
                    "KelasId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Kelas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "KelasId"
                    },
                    "ket": {
                        "type": Sequelize.STRING,
                        "field": "ket"
                    },
                    "nilai_akhir": {
                        "type": Sequelize.DECIMAL,
                        "field": "nilai_akhir"
                    },
                    "nilai": {
                        "type": Sequelize.STRING,
                        "field": "nilai"
                    },
                    "status": {
                        "type": Sequelize.STRING,
                        "field": "status"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "NilaiPengetahuans",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "GuruId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Gurus",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "GuruId"
                    },
                    "MatpelId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "MataPelajarans",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "MatpelId"
                    },
                    "SiswaId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Siswas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "SiswaId"
                    },
                    "TahunId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Tahuns",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "TahunId"
                    },
                    "KelasId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Kelas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "KelasId"
                    },
                    "ket": {
                        "type": Sequelize.STRING,
                        "field": "ket"
                    },
                    "nilai_akhir": {
                        "type": Sequelize.DECIMAL,
                        "field": "nilai_akhir"
                    },
                    "nilai": {
                        "type": Sequelize.STRING,
                        "field": "nilai"
                    },
                    "status": {
                        "type": Sequelize.STRING,
                        "field": "status"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "NilaiSikaps",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "SiswaId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Siswas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "SiswaId"
                    },
                    "TahunId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Tahuns",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "TahunId"
                    },
                    "KelasId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Kelas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "KelasId"
                    },
                    "nilai_sosial": {
                        "type": Sequelize.STRING,
                        "field": "nilai_sosial"
                    },
                    "ket_sosial": {
                        "type": Sequelize.STRING,
                        "field": "ket_sosial"
                    },
                    "nilai_spiritual": {
                        "type": Sequelize.STRING,
                        "field": "nilai_spiritual"
                    },
                    "ket_spiritual": {
                        "type": Sequelize.STRING,
                        "field": "ket_spiritual"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Prestasis",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "SiswaId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Siswas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "SiswaId"
                    },
                    "TahunId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Tahuns",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "TahunId"
                    },
                    "KelasId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Kelas",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "KelasId"
                    },
                    "jenis": {
                        "type": Sequelize.STRING,
                        "field": "jenis"
                    },
                    "ket": {
                        "type": Sequelize.STRING,
                        "field": "ket"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        }
    ];
};
var rollbackCommands = function(transaction) {
    return [{
            fn: "dropTable",
            params: ["Ekstrakulikullers", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Gurus", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Kelas", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["kelompok_kelas", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["kelompok_matpel_gurus", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["kelompok_wali_kelas", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["MataPelajarans", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["NilaiAbsens", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["NilaiEktrakulikulers", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["NilaiKeterampilans", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["NilaiPengetahuans", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["NilaiSikaps", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Prestasis", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Rangkings", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Siswas", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Tahuns", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Users", {
                transaction: transaction
            }]
        }
    ];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};
