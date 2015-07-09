// JavaScript Document
module.exports = function(grunt){
	'use strict';
    grunt.initConfig({
		clean:{
			all:['dest/**']
			},
		copy:{
			html:{expand: true, src: ['index.html'], dest: 'dest'}
			},
        concat: {
            options: {                                       //配置
                stripBanners:true,
                banner: '/*! This is the grunt test ' +      //添加自定义的banner
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            basic: {                                         //另一个任务
                files: {                                     //另一种更简便的写法
                    'dist/css/style.css': ['css/*.css']
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! This is uglify test - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
			bin: {expand: true, cwd: 'bin', src: ['*.js'], dest: 'dest/bin'},
			api: {expand: true, cwd: 'api', src: ['*.js'], dest: 'dest/api'},
			control: {expand: true, cwd: 'control', src: ['*.js'], dest: 'dest/control'}
            },
		htmlmin:{
			options: {
                removeComments: true,
				 removeCommentsFromCDATA: true,
				 collapseWhitespace: true,
				 collapseBooleanAttributes: true,
				 removeAttributeQuotes: true,
				 removeRedundantAttributes: true,
				 useShortDoctype: true,
				 removeEmptyAttributes: true,
				 removeOptionalTags: true
            },
			html:{
				 expand: true, cwd: 'view', src: ['*.html'], dest: 'dest/view'
			}
			},
		imagemin:{
         options: {
            optimizationLevel: 7,
            pngquant: true
          },
			img:{
				 expand: true, cwd: 'img', src: ['*.{png,jpg,jpeg,gif,webp,svg}'], dest: 'dest/img'
			}
			},
        watch: {
            another: {
                files: ['js/*.js'],
                tasks: ['uglify']
            }
        }
    });
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['clean','copy','concat','uglify','htmlmin','imagemin']);
}